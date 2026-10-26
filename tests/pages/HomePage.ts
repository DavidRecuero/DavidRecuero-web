import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainNav: Locator;
  readonly mainContainer: Locator;
  readonly heroContainer: Locator;
  readonly experienceEducationContainer: Locator;
  readonly skillsContainer: Locator;
  readonly cvButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainNav = page.getByRole('navigation', { name: 'Main' });
    this.mainContainer = page.locator('main');
    this.heroContainer = page.getByTestId('hero-section');
    this.experienceEducationContainer = page.getByTestId('experience-education-section');
    this.skillsContainer = page.getByTestId('skills-section');
    this.cvButton = page.getByTestId('cv-download-button');
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  getNavLink(label: string): Locator {
    return this.mainNav.getByRole('link', { name: label, exact: true });
  }
}