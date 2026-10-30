import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly mainNav: Locator;
  readonly mainContainer: Locator;
  readonly heroContainer: Locator;
  readonly experienceEducationContainer: Locator;
  readonly skillsContainer: Locator;
  readonly cvButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mainNav = page.getByRole('navigation', { name: 'Main' });
    this.mainContainer = page.locator('main');
    this.heroContainer = page.getByTestId('hero-section');
    this.experienceEducationContainer = page.getByTestId('experience-education-section');
    this.skillsContainer = page.getByTestId('skills-section');
    this.cvButton = page.getByTestId('cv-download-button');
  }

  async goto(path = '/') {
    await this.open(path);
  }

  getNavLink(label: string): Locator {
    return this.mainNav.getByRole('link', { name: label, exact: true });
  }
}