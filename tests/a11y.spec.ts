import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixtures';
import { BasePage } from './pages/BasePage';
import { sitePages } from './sitePages';

// WCAG 2.1 level A and AA rules
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

// The site follows the OS theme (prefers-color-scheme), so both themes are checked
const colorSchemes = ['light', 'dark'] as const;

test.describe('Accessibility', () => {
  for (const sitePage of sitePages) {
    for (const colorScheme of colorSchemes) {
      test(`should have no WCAG A/AA violations on "${sitePage.label}" (${colorScheme})`, async ({ page }, testInfo) => {
        await page.emulateMedia({ colorScheme });
        await new BasePage(page).open(sitePage.path);

        const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

        // Full axe report attached to the HTML report, with fix suggestions for each rule
        await testInfo.attach('axe-results.json', {
          body: JSON.stringify(results.violations, null, 2),
          contentType: 'application/json',
        });

        // Short summary in the assertion: rule, impact and affected elements
        const summary = results.violations.map((violation) => ({
          rule: violation.id,
          impact: violation.impact,
          elements: violation.nodes.map((node) => node.target.join(' ')),
        }));
        expect(summary).toEqual([]);
      });
    }
  }
});
