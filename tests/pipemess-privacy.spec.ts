import { test, expect } from './fixtures';
import { PipemessPrivacyPage } from './pages/PipemessPrivacyPage';
import { privacyPolicies, PRIVACY_CONTACT_EMAIL, PrivacyPolicy } from '../data/pipemessPrivacy';

// Every URL written in a policy's texts (intro, paragraphs and bullets)
function urlsInPolicy(policy: PrivacyPolicy): string[] {
  const texts = [
    ...policy.intro,
    ...policy.sections.flatMap((section) => [...(section.paragraphs ?? []), ...(section.bullets ?? [])]),
  ];
  return [...new Set(texts.flatMap((text) => text.match(/https?:\/\/[^\s)]+/g) ?? []))];
}

test.describe('Pipe Mess privacy policy', () => {
  let privacyPage: PipemessPrivacyPage;

  test.beforeEach(async ({ page }) => {
    privacyPage = new PipemessPrivacyPage(page);
  });

  test('should be publicly reachable at its fixed URL', async () => {
    // Google Play links to this exact URL: it must answer 200 without any navigation
    const response = await privacyPage.goto();
    expect(response?.status()).toBe(200);
  });

  test('should render every language with its title, date and sections', async () => {
    await privacyPage.goto();

    for (const policy of privacyPolicies) {
      await test.step(policy.languageName, async () => {
        const article = privacyPage.getPolicy(policy.lang);

        await expect(article).toBeVisible();
        // Lets screen readers and translators know the language of each block
        await expect(article).toHaveAttribute('lang', policy.lang);

        await expect
          .soft(article.getByRole('heading', { level: 1, name: policy.title, exact: true }))
          .toBeVisible();
        await expect.soft(article.getByText(policy.lastUpdated, { exact: true })).toBeVisible();

        // Exactly the sections in the data, in order
        await expect
          .soft(article.getByRole('heading', { level: 2 }))
          .toHaveText(policy.sections.map((section) => section.heading));
      });
    }
  });

  test('should jump to each language from the language selector', async ({ page }) => {
    await privacyPage.goto();

    await expect(privacyPage.languageLinks).toHaveCount(privacyPolicies.length);

    // Reverse order so every click moves the page (the first language is already on screen)
    for (const policy of [...privacyPolicies].reverse()) {
      await test.step(policy.languageName, async () => {
        const link = privacyPage.getLanguageLink(policy.languageName);
        await expect(link).toHaveAttribute('href', `#${policy.lang}`);

        await link.click();
        await expect(page).toHaveURL(new RegExp(`#${policy.lang}$`));
        await expect(privacyPage.getPolicy(policy.lang)).toBeInViewport();
      });
    }
  });

  test('should turn the contact email and every URL into safe links', async () => {
    await privacyPage.goto();

    for (const policy of privacyPolicies) {
      await test.step(policy.languageName, async () => {
        const article = privacyPage.getPolicy(policy.lang);

        // Contact is legally required (GDPR rights) and required by Google Play
        const emailLinks = article.locator(`a[href="mailto:${PRIVACY_CONTACT_EMAIL}"]`);
        await expect.soft(emailLinks.first(), `${policy.lang} → email`).toBeVisible();

        for (const url of urlsInPolicy(policy)) {
          const link = article.locator(`a[href="${url}"]`).first();
          await expect.soft(link, `${policy.lang} → ${url}`).toBeVisible();
          await expect.soft(link, `${policy.lang} → ${url}`).toHaveAttribute('target', '_blank');
          await expect.soft(link, `${policy.lang} → ${url}`).toHaveAttribute('rel', 'noopener noreferrer');
        }
      });
    }
  });
});
