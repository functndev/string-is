import { isEmpty } from 'lodash'

import { JsonConverter, JsonToYamlConverter, Converter } from '@lib/converters'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonObject'

export const confidence = (input: string) => {
  const obj = jsonInput(input)
  if (!obj) {
    return 0
  } else if (isEmpty(obj)) {
    // There's not much value in beautifying an empty object.
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Object]' ? 100 : 0
}

export const converters = [JsonConverter, JsonToYamlConverter] as Converter[]
