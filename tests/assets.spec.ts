import { test, expect } from '@playwright/test';
import { projects } from '../data/projects';
import { heroData } from '../data/cv';

// Browser-independent: excluded from firefox/webkit in playwright.config.ts

// Every static file referenced from the data files
const assetPaths = [
  heroData.cvDownloadLink,
  ...heroData.showreelVideos.flatMap((video) => [video.mp4, video.webm]),
  ...projects.flatMap((project) => [project.imageSrc, project.videoSrcWebm, project.videoSrcMp4]),
].filter((path): path is string => Boolean(path));

const expectedContentType: Record<string, string> = {
  pdf: 'application/pdf',
  webp: 'image/webp',
  mp4: 'video/mp4',
  webm: 'video/webm',
};

test.describe('Static assets', () => {
  test('should reference every asset with an absolute path', () => {
    // Relative paths only work from "/" and break on any other route
    for (const path of assetPaths) {
      expect.soft(path, path).toMatch(/^\//);
    }
  });

  for (const path of new Set(assetPaths)) {
    test(`should serve ${path}`, async ({ request }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(200);

      const extension = path.split('.').pop()!.toLowerCase();
      expect(response.headers()['content-type']).toContain(expectedContentType[extension]);
    });
  }
});
