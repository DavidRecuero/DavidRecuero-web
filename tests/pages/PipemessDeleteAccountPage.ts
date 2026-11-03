import { Page, Locator, Response } from '@playwright/test';
import { BasePage } from './BasePage';
import { LegalLang } from '../../data/legalDocument';

export const PIPEMESS_DELETE_ACCOUNT_PATH = '/pipemess/delete-account';

export class PipemessDeleteAccountPage extends BasePage {
  readonly languageNav: Locator;
  readonly languageLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.languageNav = page.getByRole('navigation', { name: 'Language' });
    this.languageLinks = this.languageNav.getByRole('link');
  }

  async goto(): Promise<Response | null> {
    return this.open(PIPEMESS_DELETE_ACCOUNT_PATH);
  }

  getDocument(lang: LegalLang): Locator {
    return this.page.locator(`article#${lang}`);
  }

  getLanguageLink(languageName: string): Locator {
    return this.languageNav.getByRole('link', { name: languageName, exact: true });
  }
}
