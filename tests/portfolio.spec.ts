import { test, expect } from '@playwright/test';
import { PortfolioPage } from './pages/PortfolioPage';
import { projects, portfolioSections } from '../data/projects';

test.describe('PortfolioPage', () => {
  let portfolioPage: PortfolioPage;

  test.beforeEach(async ({ page }) => {
    portfolioPage = new PortfolioPage(page);
    await portfolioPage.goto();
  });

  test('should render every project card inside its own section', async () => {
    // Total count matches the source of truth
    await expect(portfolioPage.projectCards).toHaveCount(projects.length);

    for (const section of portfolioSections) {
      const sectionLocator = portfolioPage.getSection(section.id);
      const expected = projects.filter((p) => p.category === section.id);

      await expect(sectionLocator).toBeVisible();

      // Each section holds exactly its own projects
      await expect
        .soft(sectionLocator.getByTestId('project-card'), section.id)
        .toHaveCount(expected.length);

      for (const project of expected) {
        await expect
          .soft(sectionLocator.getByRole('heading', { level: 3, name: project.title, exact: true }), project.title)
          .toBeVisible();
      }
    }
  });

  test('should scroll to each section via PortfolioNav and mark it as current', async () => {
    // Reverse order so every click moves the page (the first section is already on screen)
    for (const section of [...portfolioSections].reverse()) {
      await test.step(section.label, async () => {
        const button = portfolioPage.getSectionNavButton(section.label);
        await button.click();

        await expect(portfolioPage.getSection(section.id)).toBeInViewport();
        await expect(button).toHaveAttribute('aria-current', 'true');

        // Only one section can be current at a time
        await expect(portfolioPage.sectionNav.locator('[aria-current="true"]')).toHaveCount(1);
      });
    }
  });

  test('should manage video playback lifecycle during hover and mouse leave', { tag: '@real-media' }, async () => {
    const cardTitle = 'Portfolio Web';
    const mediaContainer = portfolioPage.getProjectMediaContainer(cardTitle);
    const videoLocator = portfolioPage.getProjectVideo(cardTitle);

    // Verify that the video exists
    await expect(videoLocator).toBeAttached();

    // 1. Hover over the media container to play the video
    await mediaContainer.hover();
    await expect
      .poll(() => videoLocator.evaluate((v: HTMLVideoElement) => !v.paused))
      .toBe(true);

    // 2. Move the mouse away from the media container to pause and reset the video
    await portfolioPage
      .getProjectCard(cardTitle)
      .getByRole('heading', { level: 3, name: cardTitle, exact: true })
      .hover();
    await expect
      .poll(() => videoLocator.evaluate((v: HTMLVideoElement) => v.paused && v.currentTime === 0))
      .toBe(true);
  });

  test('should play on hover and pause + reset on mouse leave', async () => {
    const cardTitle = 'Portfolio Web';
    const { page } = portfolioPage;
    const mediaContainer = portfolioPage.getProjectMediaContainer(cardTitle);
    const videoLocator = portfolioPage.getProjectVideo(cardTitle);

    // Spy on the video element to intercept play, pause, and currentTime calls
    await videoLocator.evaluate((video: HTMLVideoElement) => {
      const calls: string[] = [];
      (window as unknown as { __mediaCalls: string[] }).__mediaCalls = calls;

      video.play = () => {
        calls.push('play');
        return Promise.resolve();
      };
      video.pause = () => {
        calls.push('pause');
      };
      Object.defineProperty(video, 'currentTime', {
        configurable: true,
        get: () => 0,
        set: (value: number) => {
          calls.push(`currentTime=${value}`);
        },
      });
    });

    const getCalls = () =>
      page.evaluate(() => (window as unknown as { __mediaCalls: string[] }).__mediaCalls);

    // 1. Hover: should play the video
    await mediaContainer.hover();
    await expect.poll(getCalls).toEqual(['play']);

    // 2. Mouse leave: should pause and reset the video
    await portfolioPage
      .getProjectCard(cardTitle)
      .getByRole('heading', { level: 3, name: cardTitle, exact: true })
      .hover();
    await expect.poll(getCalls).toEqual(['play', 'pause', 'currentTime=0']);
  });

  test('should verify secure external links for every project in data', async () => {
    for (const project of projects) {
      const card = portfolioPage.getProjectCard(project.title);
      const urls = project.url ?? [];

      // No stray or missing links in the card
      await expect.soft(card.getByRole('link'), project.title).toHaveCount(urls.length);

      for (const url of urls) {
        const link = card.locator(`a[href="${url}"]`);
        await expect.soft(link, `${project.title} → ${url}`).toBeVisible();
        await expect.soft(link, `${project.title} → ${url}`).toHaveAttribute('target', '_blank');
        await expect.soft(link, `${project.title} → ${url}`).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});