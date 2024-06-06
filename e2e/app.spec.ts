import { expect, test } from '@playwright/test'

// TODO: From .env so tests can be run on Github actions
const APP_URL = 'http://localhost:3000'

test.beforeEach(async ({ page }) => page.goto(APP_URL))

test.describe('app', () => {
  test('whatever', async ({ page }) => {
    await expect(page.getByText('Perspective.co')).toBeVisible()
    await expect(page).toHaveScreenshot()
  })
})
