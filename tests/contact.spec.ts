import { test, expect } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';

test.describe('ContactPage', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });
});