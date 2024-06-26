/// <reference lib="dom"/>

import { expect, Page, test } from '@playwright/test'

import { uploadFile } from './utils'
import { dragAndDropFile } from './utils/dragAndDropFile'

// TODO: From .env so tests can be run on Github actions
const APP_URL = 'http://localhost:3000'
const DEMO_FUNNEL_FIXTURE = './fixtures/demo.funnel.json'

test.beforeEach(async ({ page }) => {
  await page.goto(APP_URL)
})

test.describe('Landing', () => {
  test('Loads page content successfully', async ({ page }) => {
    await expect(page.getByText('Welcome to')).toBeVisible()
    await expect(page.getByText('Funnel Preview')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Select funnel file' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'View demo' })).toBeVisible()
    await expect(page).toHaveScreenshot({ fullPage: true })
  })

  test('Can upload valid JSON file via button', async ({ page }) => {
    await uploadFile({ page, buttonLabel: 'Select funnel file', filePath: DEMO_FUNNEL_FIXTURE })
    await validatePreviewRender(page, { withScreenshot: false })
  })

  test('Can upload valid JSON file via drag-n-drop', async ({ page }) => {
    await dragAndDropFile({
      page,
      selector: '[data-testid="dropzone"]',
      filePath: DEMO_FUNNEL_FIXTURE,
      fileName: 'demo.funnel.json',
      fileType: 'application/json',
    })

    await validatePreviewRender(page, { withScreenshot: false })
  })

  test('Can use demo JSON file', async ({ page }) => {
    await page.getByRole('button', { name: 'View demo' }).click()
    await validatePreviewRender(page, { withScreenshot: false })
  })

  test('Can not upload file with invalid extension', async ({}) => {})

  test('Can not use file with corrupted data', async ({}) => {})

  test('Can not use file with invalid data shape', async ({}) => {})
})

test.describe('Preview', () => {
  test('Renders as expected on iPhone', async ({ page }) => {
    await page.getByRole('button', { name: 'View demo' }).click()
    await validatePreviewRender(page)
  })

  test('Renders as expected on Android', async ({ page }) => {
    await page.getByRole('button', { name: 'View demo' }).click()
    await page.getByRole('button', { name: 'Nexus 6P' }).click()
    await validatePreviewRender(page)
  })

  test('Can change pages', async ({ page }) => {
    await page.getByRole('button', { name: 'View demo' }).click()
    await page.getByRole('button', { name: 'Next' }).click()
    await expect(page.getByText('Thanks for stopping by!')).toBeVisible()
    await validatePreviewRender(page)
  })

  test('Can change device scale', async ({}) => {})

  test('Can hide device frame', async ({}) => {})
})

const validatePreviewRender = async (page: Page, opts: { withScreenshot: boolean } = { withScreenshot: true }) => {
  // todo: more exact assertions for content
  await expect(page.getByText('My awesome funnel')).toBeVisible()

  if (opts.withScreenshot) {
    // wait for images to load before taking screenshot
    const images = await page.locator('img').all()
    for (const img of images) {
      await expect(img).toHaveJSProperty('complete', true)
    }

    // take screenshot of the entire page
    await expect(page).toHaveScreenshot({ fullPage: true })
  }
}
