import { Page } from '@playwright/test'
import { readFileSync } from 'fs'

interface DragAndDropFileParams {
  page: Page
  selector: string
  fileName: string
  fileType: string
  filePath: string
}

export const dragAndDropFile = async ({ page, selector, fileName, fileType, filePath }: DragAndDropFileParams) => {
  const buffer = readFileSync(filePath).toString('base64')

  // Taken from https://stackoverflow.com/a/77738836
  const dataTransfer = await page.evaluateHandle(
    async ({ bufferData, localFileName, localFileType }) => {
      const dt = new DataTransfer()
      const blobData = await fetch(bufferData).then((res) => res.blob())
      const file = new File([blobData], localFileName, { type: localFileType })
      dt.items.add(file)
      return dt
    },
    {
      bufferData: `data:application/octet-stream;base64,${buffer}`,
      localFileName: fileName,
      localFileType: fileType,
    },
  )

  await page.dispatchEvent(selector, 'drop', { dataTransfer })
}
