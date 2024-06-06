import { expect, test } from '@playwright/test';

const APP_URL = 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(APP_URL);
});

test.describe('app', () => {
  test('whatever', async ({ page }) => {
    await expect(page.getByText('Perspective.co')).toBeVisible();
    await expect(page).toHaveScreenshot();
  });
});
