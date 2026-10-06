import { Page, Locator } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly navContainer: Locator;
  readonly commercialSection: Locator;
  readonly myCodeSection: Locator;
  readonly projectCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navContainer = page.getByRole('navigation');
    this.commercialSection = page.locator('section#commercial');
    this.myCodeSection = page.locator('section#my-code');
    this.projectCards = page.locator('article');
  }

  async goto() {
  await this.page.goto('/portfolio', { waitUntil: 'domcontentloaded' });

  // Wait for the React props to be attached to the navigation button before proceeding
  await this.page.waitForFunction(() => {
    const btn = document.querySelector('main nav button');
    return !!btn && Object.keys(btn).some((k) => k.startsWith('__reactProps$'));
  });
}

  async clickSectionNav(label: string) {
    await this.navContainer.getByRole('button', { name: label }).click();
  }

  getProjectCard(title: string): Locator {
    return this.projectCards.filter({
      has: this.page.getByRole('heading', { name: title, level: 3, exact: true }),
    });
  }

  getProjectMediaContainer(title: string): Locator {
    return this.getProjectCard(title).locator('div').first();
  }

  getProjectVideo(title: string): Locator {
    return this.getProjectCard(title).locator('video');
  }
}