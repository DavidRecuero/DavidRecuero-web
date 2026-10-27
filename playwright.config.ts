import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      /* Browser-independent tests (assets, accessibility) run on chromium only */
      testIgnore: /(assets|a11y)\.spec\.ts/,
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      /* Playwright WebKit on Windows lacks the video codecs: skip tests that need real playback */
      grepInvert: /@real-media/,
      /* Browser-independent tests (assets, accessibility) run on chromium only */
      testIgnore: /(assets|a11y)\.spec\.ts/,
    },

    /* Mobile viewport: checks the responsive layout */
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
      /* Touch devices have no hover: skip hover-driven tests */
      grepInvert: /@hover/,
      /* Browser-independent tests run on chromium only */
      testIgnore: /assets\.spec\.ts/,
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Build and start a production server with the email mock enabled */
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    /* Never reuse a running server (e.g. `npm run dev`): it wouldn't have E2E_MOCK_EMAIL and would send real emails */
    reuseExistingServer: false,
    /* Server-only flag read by actions/sendEmail.ts to skip Resend during E2E runs */
    env: { E2E_MOCK_EMAIL: 'true' },
  },
});