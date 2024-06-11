export const PARSING_ERROR = ['file', 'schema'] as const

export const PARSING_ERROR_MESSAGES: { [key in ParsingError]: string } = {
  file: 'Failed to parse file as JSON.',
  schema: 'The provided JSON file has invalid data shape.',
}

export type ParsingError = (typeof PARSING_ERROR)[number]
