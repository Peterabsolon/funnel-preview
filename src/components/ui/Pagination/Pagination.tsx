import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { ArrowIcon } from '~/components/icons'

import { Button } from '../Button'

export interface PaginationProps {
  /**
   * Root element className
   */
  className?: string

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

export const Pagination = observer(({ className, page, pagesCount, setPage }: PaginationProps) => {
  const isFirstPage = page === 0
  const isLastPage = page === pagesCount - 1

  const onPrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setPage(Math.max(0, page - 1))
  }

  const onNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setPage(Math.min(pagesCount - 1, page + 1))
  }

  return (
    <div className={cx('mx-auto flex w-96 items-center justify-between', className)}>
      <Button
        disabled={isFirstPage}
        iconLeft={<ArrowIcon className="mr-1 h-4 w-4" />}
        variant="secondary"
        onClick={onPrevClick}
      >
        Prev
      </Button>

      <span className="mx-4">
        Page {page + 1} of {pagesCount}
      </span>

      <Button
        disabled={isLastPage}
        iconRight={<ArrowIcon className="ml-1 h-4 w-4 rotate-180" />}
        variant="secondary"
        onClick={onNextClick}
      >
        Next
      </Button>
    </div>
  )
})
