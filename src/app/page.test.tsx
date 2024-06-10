import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Page from '../app/page'

/**
 * Note: This is just a sample test using react-testing-library. More cases are covered through e2e
 */
describe('Page', () => {
  test('can view demo', () => {
    render(<Page />)
    expect(screen.getByRole('button', { name: 'Select funnel file' })).toBeDefined()
    screen.getByRole('button', { name: 'View demo' }).click()
    screen.getByText('My awesome funnel')
  })
})
