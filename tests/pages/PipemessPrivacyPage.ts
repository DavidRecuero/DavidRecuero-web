import { Page, Locator, Response } from '@playwright/test';
import { BasePage } from './BasePage';
import { PrivacyLang } from '../../data/pipemessPrivacy';

export const PIPEMESS_PRIVACY_PATH = '/pipemess/privacy';

export class PipemessPrivacyPage extends BasePage {
  readonly languageNav: Locator;
  readonly languageLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.languageNav = page.getByRole('navigation', { name: 'Language' });
    this.languageLinks = this.languageNav.getByRole('link');
  }

  async goto(): Promise<Response | null> {
    return this.open(PIPEMESS_PRIVACY_PATH);
  }

  getPolicy(lang: PrivacyLang): Locator {
    return this.page.locator(`article#${lang}`);
  }

  getLanguageLink(languageName: string): Locator {
    return this.languageNav.getByRole('link', { name: languageName, exact: true });
  }
}
