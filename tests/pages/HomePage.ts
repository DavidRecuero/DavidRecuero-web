import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainContainer: Locator;
  readonly heroContainer: Locator;
  readonly experienceEducationContainer: Locator;
  readonly skillsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainContainer = page.locator('main'); 
    this.heroContainer = page.getByTestId('hero-section');
    this.experienceEducationContainer = page.getByTestId('experience-education-section');
    this.skillsContainer = page.getByTestId('skills-section');
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
  }

  async clickNavLink(linkText: string, expectedPath: string) {
    await this.page.getByRole('navigation').getByRole('link', { name: linkText }).click();
    await this.page.waitForURL(`**${expectedPath}`);
  }
}