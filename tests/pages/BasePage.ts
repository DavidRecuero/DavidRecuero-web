import { Page, Response } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Navigates to a path and waits until React has hydrated (event handlers are live) */
  async open(path: string): Promise<Response | null> {
    // Not waiting for "load": <video> elements delay it and WebKit on Windows never fires it
    const response = await this.page.goto(path, { waitUntil: 'domcontentloaded' });

    // Navbar (root layout) sets --header-height in a useEffect → React has hydrated
    await this.page.waitForFunction(
      () => document.documentElement.style.getPropertyValue('--header-height') !== ''
    );

    return response;
  }
}
