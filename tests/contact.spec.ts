import { test, expect } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';
import { socialLinks } from '../data/socials';

test.describe('ContactPage', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('should display availability status and render all social links dynamically', async () => {
    // Validate that the availability badge is visible and contains the expected text
    await expect(contactPage.availabilityBadge).toBeVisible();
    await expect(contactPage.availabilityBadge).toContainText('Barcelona (CET)');

    // Validate that the number of cards matches the source of truth
    await expect(contactPage.socialCards).toHaveCount(socialLinks.length);

    // Validate security attributes and URLs for each social link
    for (const social of socialLinks) {
      const card = contactPage.getSocialCard(social.name);
      await expect(card).toBeVisible();
      await expect(card).toHaveAttribute('href', social.url);
      await expect(card).toHaveAttribute('target', '_blank');
      await expect(card).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('should enforce HTML5 validation on required form fields', async () => {
    // Try to submit the form without filling any fields
    await contactPage.submitButton.click();

    // Check that the name input field is invalid due to being required
    const isNameInvalid = await contactPage.nameInput.evaluate(
      (input: HTMLInputElement) => !input.checkValidity()
    );
    expect(isNameInvalid).toBe(true);
  });

  test('should submit contact form successfully and display feedback', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'media not reliable on webkit');

    const mockFormData = {
      name: 'Test QA User',
      email: 'qa.test@example.com',
      subject: 'Senior QA Collaboration Proposal',
      message: 'Hello, this is an automated E2E test message verifying form delivery.',
    };

    // Fill the form with mock data and submit
    await contactPage.fillForm(mockFormData);
    await contactPage.submitButton.click();

    // Validate that the success banner is visible after submission
    await expect(contactPage.successBanner).toBeVisible();

    // Validate that the form fields are cleared after successful submission
    await expect(contactPage.nameInput).toHaveValue('');
    await expect(contactPage.emailInput).toHaveValue('');
    await expect(contactPage.subjectInput).toHaveValue('');
    await expect(contactPage.messageInput).toHaveValue('');
  });
});