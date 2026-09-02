import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('HomePage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('should display all main layout sections', async () => {
    await expect(homePage.mainContainer).toBeVisible();
    await expect(homePage.heroContainer).toBeVisible();
    await expect(homePage.experienceEducationContainer).toBeVisible();
    await expect(homePage.skillsContainer).toBeVisible();
  });

  test('should navigate to Portfolio section', async ({ page }) => {
    await homePage.clickNavLink('Portfolio', '/portfolio'); 
    await expect(page).toHaveURL(/.*\/portfolio/);
  });

  test('should navigate to Contact section', async ({ page }) => {
    await homePage.clickNavLink('Contact', '/contact'); 
    await expect(page).toHaveURL(/.*\/contact/);
  });
});