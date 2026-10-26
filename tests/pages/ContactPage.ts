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
    this.availabilityBadge = page.getByTestId('availability-badge');
    this.socialCards = page.getByTestId('social-card');

    // Located by label: also verifies every field has an associated <label>
    this.nameInput = page.getByLabel('Your name', { exact: true });
    this.emailInput = page.getByLabel('Your mail', { exact: true });
    this.subjectInput = page.getByLabel('Subject', { exact: true });
    this.messageInput = page.getByLabel('Message', { exact: true });
    this.submitButton = page.getByRole('button', { name: /send message/i });
    this.successBanner = page.getByRole('status');
  }

  get formFields(): Locator[] {
    return [this.nameInput, this.emailInput, this.subjectInput, this.messageInput];
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

  async isValid(field: Locator): Promise<boolean> {
    return field.evaluate((el: HTMLInputElement | HTMLTextAreaElement) => el.checkValidity());
  }

  getSocialCard(name: string): Locator {
    return this.socialCards.filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }
}