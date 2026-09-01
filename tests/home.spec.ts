import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('Main page loads properly', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.goto();

  await expect(homePage.mainContainer).toBeVisible();
  await expect(homePage.heroContainer).toBeVisible();
  await expect(homePage.experienceEducationContainer).toBeVisible();
  await expect(homePage.skillsContainer).toBeVisible();
});