import { Converter, YamlConverter, YamlToJsonConverter } from '@lib/converters'
import { input } from '@lib/inputs/YamlInput'

export const id = 'yaml'

export const confidence = (data: string) => {
  // We can assume that YAML will have at least 2 lines. Any number
  // is actually valid YAML, so eg. timestamps will trigger it.
  if (data.split(/\r\n|\r|\n/).length < 2) {
    return 0
  }

  const obj = input(data)
  if (!obj) {
    return 0
  }

  // Sometimes js-yaml just gives up and returns the original string.
  if (typeof obj === 'string') {
    return 0
  }

  return 100
}

export const converters = [YamlConverter, YamlToJsonConverter] as Converter[]
