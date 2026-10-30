import { test, expect } from './fixtures';
import { ContactPage } from './pages/ContactPage';
import { socialLinks } from '../data/socials';

const validFormData = {
  name: 'Test QA User',
  email: 'qa.test@example.com',
  subject: 'Senior QA Collaboration Proposal',
  message: 'Hello, this is an automated E2E test message verifying form delivery.',
};

// The E2E email mock fails for any address on this domain (see actions/sendEmail.ts)
const failingEmail = 'qa.test@e2e-fail.test';

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

    // Soft assertions: one broken link doesn't hide the rest
    for (const social of socialLinks) {
      const card = contactPage.getSocialCard(social.name);
      await expect.soft(card, social.name).toBeVisible();
      await expect.soft(card, social.name).toHaveAttribute('href', social.url);
      await expect.soft(card, social.name).toHaveAttribute('target', '_blank');
      await expect.soft(card, social.name).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('should mark every field as required when submitting an empty form', async () => {
    await contactPage.submitButton.click();

    for (const field of contactPage.formFields) {
      await expect.soft(field).toHaveAttribute('required', '');
      expect.soft(await contactPage.isValid(field)).toBe(false);
    }

    // The form must not be sent
    await expect(contactPage.successBanner).toBeHidden();
  });

  test('should reject an invalid email format', async () => {
    await contactPage.fillForm({ ...validFormData, email: 'not-an-email' });
    await contactPage.submitButton.click();

    expect(await contactPage.isValid(contactPage.emailInput)).toBe(false);
    await expect(contactPage.successBanner).toBeHidden();
  });

  test('should submit contact form successfully and display feedback', async () => {
    await contactPage.fillForm(validFormData);
    await contactPage.submitButton.click();

    // Validate that the success banner is visible after submission
    await expect(contactPage.successBanner).toBeVisible();
    await expect(contactPage.successBanner).toContainText('Message sent');

    // Validate that the form fields are cleared after successful submission
    for (const field of contactPage.formFields) {
      await expect.soft(field).toHaveValue('');
    }
  });

  test('should show a loading state while the message is being sent', async () => {
    await contactPage.fillForm(validFormData);
    await contactPage.submitButton.click();

    // While sending: label changes and the button can't be clicked twice
    const sendingButton = contactPage.page.getByRole('button', { name: 'Sending...' });
    await expect(sendingButton).toBeVisible();
    await expect(sendingButton).toBeDisabled();

    // When done: back to the initial state
    await expect(contactPage.successBanner).toBeVisible();
    await expect(contactPage.submitButton).toBeEnabled();
  });

  test('should show an error and keep the form data when sending fails', async ({ consoleErrors }) => {
    // ContactForm logs the failure with console.error: expected here
    consoleErrors.allow(/E2E mocked failure/);

    const failingData = { ...validFormData, email: failingEmail };

    await contactPage.fillForm(failingData);
    await contactPage.submitButton.click();

    await expect(contactPage.errorBanner).toBeVisible();
    await expect(contactPage.successBanner).toBeHidden();

    // The user must not lose what they wrote
    await expect.soft(contactPage.nameInput).toHaveValue(failingData.name);
    await expect.soft(contactPage.emailInput).toHaveValue(failingData.email);
    await expect.soft(contactPage.subjectInput).toHaveValue(failingData.subject);
    await expect.soft(contactPage.messageInput).toHaveValue(failingData.message);

    // The user can retry
    await expect(contactPage.submitButton).toBeEnabled();
  });
});