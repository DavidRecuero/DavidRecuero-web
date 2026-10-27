import { test, expect } from './fixtures';
import { BasePage } from './pages/BasePage';
import { navLinks } from '../data/siteConfig';

test.describe('Site-wide', () => {
  for (const link of navLinks) {
    test(`should expose title, description and language on "${link.label}"`, async ({ page }) => {
      await new BasePage(page).open(link.href);

      await expect(page).toHaveTitle(/David Recuero/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });
  }

  test('should return 404 for unknown routes and keep the site navigation', async ({ page, consoleErrors }) => {
    // Browsers log the 404 document response as a console error: expected here
    consoleErrors.allow(/404/);

    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);
    await expect(page.getByText('This page could not be found')).toBeVisible();

    // The navbar lives in the root layout, so the user can still get back home
    await page
      .getByRole('navigation', { name: 'Main' })
      .getByRole('link', { name: 'Home', exact: true })
      .click();
    await expect(page).toHaveURL('/');
  });
});
