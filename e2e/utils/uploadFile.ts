import { Page } from '@playwright/test'

interface UploadFileProps {
  /**
   * Playwright page to do upload on
   */
  page: Page

  /**
   * The label of the button which opens file dialog
   */
  buttonLabel: string

  /**
   * Path of the fixture file relative to filesystem
   */
  filePath: string
}

export const uploadFile = async ({ page, buttonLabel, filePath }: UploadFileProps) => {
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: buttonLabel }).click(),
  ])

  await fileChooser.setFiles(filePath)
}
