import { Page, Locator, expect } from '@playwright/test';
import { SectionId } from '../../types/project';

export class PortfolioPage {
  readonly page: Page;
  readonly sectionNav: Locator;
  readonly projectCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sectionNav = page.getByRole('navigation', { name: 'Portfolio sections' });
    this.projectCards = page.getByTestId('project-card');
  }

  async goto() {
    await this.page.goto('/portfolio', { waitUntil: 'domcontentloaded' });
    await expect(this.projectCards.first()).toBeVisible();

    await this.page.waitForFunction(
      () => document.documentElement.style.getPropertyValue('--header-height') !== ''
    );
  }

  getSection(id: SectionId): Locator {
    return this.page.locator(`section#${id}`);
  }

  getSectionNavButton(label: string): Locator {
    return this.sectionNav.getByRole('button', { name: label, exact: true });
  }

  getProjectCard(title: string): Locator {
    return this.projectCards.filter({
      has: this.page.getByRole('heading', { name: title, level: 3, exact: true }),
    });
  }

  getProjectMediaContainer(title: string): Locator {
    return this.getProjectCard(title).getByTestId('project-media');
  }

  getProjectVideo(title: string): Locator {
    return this.getProjectCard(title).locator('video');
  }
}