import { test, expect } from '@playwright/test';
import { PortfolioPage } from './pages/PortfolioPage';
import { projects, portfolioSections } from '../data/projects';

test.describe('PortfolioPage', () => {
  let portfolioPage: PortfolioPage;

  test.beforeEach(async ({ page }) => {
    portfolioPage = new PortfolioPage(page);
    await portfolioPage.goto();
  });

  test('should display all sections and render every project card dynamically', async () => {
    // Verify that all sections are visible
    for (const section of portfolioSections) {
      const sectionLocator = portfolioPage.page.locator(`section#${section.id}`);
      await expect(sectionLocator).toBeVisible();
    }

    // Verify that the count of <article> elements in the DOM matches the projects array
    await expect(portfolioPage.projectCards).toHaveCount(projects.length);

    // Verify that each individual project from the data is visible
    for (const project of projects) {
      await expect(portfolioPage.getProjectCard(project.title)).toBeVisible();
    }
  });

  test('should navigate between sections via PortfolioNav', async () => {
    // Click on My Code button
    await portfolioPage.clickSectionNav('My Code');

    // Verify that the My Code section is in the viewport
    await expect(portfolioPage.myCodeSection).toBeInViewport();
  });


  test('should manage video playback lifecycle during hover and mouse leave', async ({ browserName }) => {
    test.skip(browserName === 'webkit', 'media not reliable on webkit');

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

  test('should play on hover and pause + reset on mouse leave', async ({ browserName }) => {
    test.skip(browserName === 'webkit', 'media not reliable on webkit');

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
      // Ignore projects without URLs
      if (!project.url || project.url.length === 0) continue;

      const card = portfolioPage.getProjectCard(project.title);

      for (const url of project.url) {
        // Locate the link within the project card
        const link = card.locator(`a[href="${url}"]`);

        // DOM validations
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});