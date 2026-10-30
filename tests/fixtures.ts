import { test as base, expect } from '@playwright/test';

type ConsoleErrors = {
  /** Lets a test declare an error it expects, so it doesn't fail the test */
  allow: (pattern: RegExp) => void;
};

export const test = base.extend<{ consoleErrors: ConsoleErrors }>({
  // auto: runs for every test that imports from this file, even if it doesn't use it
  consoleErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      const allowed: RegExp[] = [];

      // Vercel Analytics / Speed Insights scripts only exist when deployed on Vercel:
      // serve them empty locally so their 404s don't count as errors
      await page.route('**/_vercel/**', (route) =>
        route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
      );

      // Uncaught exceptions (including React hydration errors in production builds)
      page.on('pageerror', (error) => errors.push(`[pageerror] ${error.message}`));
      // console.error calls and failed resource loads
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(`[console.error] ${message.text()}`);
      });

      await use({ allow: (pattern) => allowed.push(pattern) });

      // After the test: fail if anything unexpected was logged
      const unexpected = errors.filter((error) => !allowed.some((pattern) => pattern.test(error)));
      expect(unexpected, 'Unexpected console errors or uncaught exceptions').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
