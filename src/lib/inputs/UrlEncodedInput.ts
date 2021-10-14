import { isEmpty } from 'lodash'

import { UrlDecodedOutput, Output } from '@lib/outputs'

export const id = 'urlEncoded'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  let decoded
  try {
    decoded = UrlDecodedOutput.operation(input)
  } catch {
    return 0
  }

  // See https://stackoverflow.com/a/2295286
  if (decoded !== input) {
    return 100
  }

  return 0
}

export const outputs = [UrlDecodedOutput] as Output[]
