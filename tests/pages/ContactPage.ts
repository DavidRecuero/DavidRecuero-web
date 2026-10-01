import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
  }
}