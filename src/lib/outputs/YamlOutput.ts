import { dump } from 'js-yaml'

import { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

export const defaultOptions = {
  forceQuotes: true,
  indent: 2,
  sortKeys: true,
}

export const id = 'yaml'

export const output = (
  input: Obj,
  { sortKeys, ...options }: ConverterOptions = {},
): string => {
  let processed = input

  if (sortKeys) {
    processed = sortByKeys(input)
  }

  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(processed, options)}`
}
