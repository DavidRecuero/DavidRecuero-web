import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly availabilityBadge: Locator;
  readonly socialCards: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.availabilityBadge = page.locator('div').filter({ hasText: 'Available for new opportunities' }).first();
    this.socialCards = page.getByTestId('social-card');
    
    this.nameInput = page.locator('input#name');
    this.emailInput = page.locator('input#email');
    this.subjectInput = page.locator('input#subject');
    this.messageInput = page.locator('textarea#message');
    this.submitButton = page.getByRole('button', { name: /send message/i });
    this.successBanner = page.getByText('✓ Message sent!');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async fillForm(data: { name: string; email: string; subject: string; message: string }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  getSocialCard(name: string): Locator {
    return this.socialCards.filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }
}