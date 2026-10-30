import { test, expect } from './fixtures';
import { HomePage } from './pages/HomePage';
import { navLinks } from '../data/siteConfig';

test.describe('HomePage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('should display all main layout sections', async () => {
    await homePage.goto();

    await expect(homePage.mainContainer).toBeVisible();
    await expect(homePage.heroContainer).toBeVisible();
    await expect(homePage.experienceEducationContainer).toBeVisible();
    await expect(homePage.skillsContainer).toBeVisible();
  });

  // One test per nav link, generated from the source of truth
  for (const link of navLinks) {
    test(`should navigate to "${link.label}" and mark it as current`, async ({ page }) => {
      // Start from a different page so the click actually navigates
      await homePage.goto(link.href === '/' ? '/contact' : '/');

      const navLink = homePage.getNavLink(link.label);
      await navLink.click();

      await expect(page).toHaveURL(link.href);
      await expect(navLink).toHaveAttribute('aria-current', 'page');

      // Only one link can be current at a time
      await expect(homePage.mainNav.locator('[aria-current="page"]')).toHaveCount(1);
    });
  }

  test('should have a valid CV download link configured', async () => {
    await homePage.goto();

    // Verifies that the CV button is visible
    await expect(homePage.cvButton).toBeVisible();

    // Verifies that it points to a pdf file
    await expect(homePage.cvButton).toHaveAttribute('href', /\.pdf$/i);

    // Verifies that the link opens in a new tab
    await expect(homePage.cvButton).toHaveAttribute('target', '_blank');
    await expect(homePage.cvButton).toHaveAttribute('rel', 'noopener noreferrer');
  });
});