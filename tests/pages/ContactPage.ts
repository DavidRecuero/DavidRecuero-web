import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly availabilityBadge: Locator;
  readonly socialCards: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successBanner: Locator;
  readonly errorBanner: Locator;

  constructor(page: Page) {
    super(page);
    this.availabilityBadge = page.getByTestId('availability-badge');
    this.socialCards = page.getByTestId('social-card');

    this.nameInput = page.getByLabel('Your name', { exact: true });
    this.emailInput = page.getByLabel('Your mail', { exact: true });
    this.subjectInput = page.getByLabel('Subject', { exact: true });
    this.messageInput = page.getByLabel('Message', { exact: true });
    this.submitButton = page.getByRole('button', { name: /send message/i });
    this.successBanner = page.getByRole('status');
    this.errorBanner = page.getByRole('alert').filter({ hasText: 'Something went wrong' });
  }

  get formFields(): Locator[] {
    return [this.nameInput, this.emailInput, this.subjectInput, this.messageInput];
  }

  async goto() {
    await this.open('/contact');
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