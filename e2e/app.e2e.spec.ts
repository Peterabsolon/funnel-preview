import { expect, test } from '@playwright/test'

// TODO: From .env so tests can be run on Github actions
const APP_URL = 'http://localhost:3000'

test.beforeEach(async ({ page }) => {
  await page.goto(APP_URL)
})

test('Loads app', async ({ page }) => {
  await expect(page.getByText('Funnel Preview')).toBeVisible()
  await expect(page).toHaveScreenshot()
})
