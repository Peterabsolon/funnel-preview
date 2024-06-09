import { observer } from 'mobx-react-lite'

import { Button } from '../Button'

export interface PaginationProps {
  /**
   * The current page, 0 indexed
   */
  page: number

  /**
   * The total number of pages available
   */
  pagesCount: number

  /**
   * Handler to set the current page
   */
  setPage: (page: number) => void
}

export const Pagination = observer(({ page, pagesCount, setPage }: PaginationProps) => {
  const onPrevClick = () => {
    setPage(Math.max(0, page - 1))
  }

  const onNextClick = () => {
    setPage(Math.min(pagesCount - 1, page + 1))
  }

  return (
    <div className="flex w-full items-center justify-between">
      <Button variant="secondary" onClick={onPrevClick}>
        {`<`} Prev
      </Button>
      {page + 1} / {pagesCount}
      <Button variant="secondary" onClick={onNextClick}>
        Next {`>`}
      </Button>
    </div>
  )
})
