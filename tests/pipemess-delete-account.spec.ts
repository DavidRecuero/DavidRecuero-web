import { test, expect } from './fixtures';
import { PipemessDeleteAccountPage } from './pages/PipemessDeleteAccountPage';
import { PipemessPrivacyPage } from './pages/PipemessPrivacyPage';
import { deleteAccountPages } from '../data/pipemessDeleteAccount';
import { privacyPolicies } from '../data/pipemessPrivacy';
import { DELETE_ACCOUNT_URL, PIPEMESS_CONTACT_EMAIL, PRIVACY_POLICY_URL } from '../data/pipemessLinks';
import { urlsInDocument } from '../data/legalDocument';

test.describe('Pipe Mess account deletion', () => {
  let deletePage: PipemessDeleteAccountPage;

  test.beforeEach(async ({ page }) => {
    deletePage = new PipemessDeleteAccountPage(page);
  });

  test('should be publicly reachable at its fixed URL', async () => {
    // The Google Play Data safety form links to this exact URL: it must answer 200 without any navigation
    const response = await deletePage.goto();
    expect(response?.status()).toBe(200);
    expect(DELETE_ACCOUNT_URL.endsWith('/pipemess/delete-account')).toBe(true);
  });

  test('should offer the same languages as the privacy policy', async () => {
    // The game links to both pages in the language on screen
    expect(deleteAccountPages.map((d) => d.lang)).toEqual(privacyPolicies.map((p) => p.lang));
  });

  test('should render every language with its title, date and sections', async () => {
    await deletePage.goto();

    for (const doc of deleteAccountPages) {
      await test.step(doc.languageName, async () => {
        const article = deletePage.getDocument(doc.lang);

        await expect(article).toBeVisible();
        await expect(article).toHaveAttribute('lang', doc.lang);

        await expect
          .soft(article.getByRole('heading', { level: 1, name: doc.title, exact: true }))
          .toBeVisible();
        await expect.soft(article.getByText(doc.lastUpdated, { exact: true })).toBeVisible();
        await expect
          .soft(article.getByRole('heading', { level: 2 }))
          .toHaveText(doc.sections.map((section) => section.heading));
      });
    }
  });

  test('should jump to each language from the language selector', async ({ page }) => {
    await deletePage.goto();

    await expect(deletePage.languageLinks).toHaveCount(deleteAccountPages.length);

    // Reverse order so every click moves the page (the first language is already on screen)
    for (const doc of [...deleteAccountPages].reverse()) {
      await test.step(doc.languageName, async () => {
        const link = deletePage.getLanguageLink(doc.languageName);
        await expect(link).toHaveAttribute('href', `#${doc.lang}`);

        await link.click();
        await expect(page).toHaveURL(new RegExp(`#${doc.lang}$`));
        await expect(deletePage.getDocument(doc.lang)).toBeInViewport();
      });
    }
  });

  test('should give the email to ask for the deletion and link the privacy policy', async () => {
    await deletePage.goto();

    for (const doc of deleteAccountPages) {
      await test.step(doc.languageName, async () => {
        const article = deletePage.getDocument(doc.lang);

        // Google Play: players must be able to ask for the deletion without installing the app
        await expect.soft(article.locator(`a[href="mailto:${PIPEMESS_CONTACT_EMAIL}"]`).first()).toBeVisible();
        await expect.soft(article.locator(`a[href="${PRIVACY_POLICY_URL}"]`).first()).toBeVisible();

        for (const url of urlsInDocument(doc)) {
          const link = article.locator(`a[href="${url}"]`).first();
          await expect.soft(link, `${doc.lang} → ${url}`).toBeVisible();
          await expect.soft(link, `${doc.lang} → ${url}`).toHaveAttribute('target', '_blank');
          await expect.soft(link, `${doc.lang} → ${url}`).toHaveAttribute('rel', 'noopener noreferrer');
        }
      });
    }
  });

  test('should be linked from every language of the privacy policy', async ({ page }) => {
    const privacyPage = new PipemessPrivacyPage(page);
    await privacyPage.goto();

    for (const policy of privacyPolicies) {
      await test.step(policy.languageName, async () => {
        await expect
          .soft(privacyPage.getPolicy(policy.lang).locator(`a[href="${DELETE_ACCOUNT_URL}"]`).first())
          .toBeVisible();
      });
    }
  });
});
