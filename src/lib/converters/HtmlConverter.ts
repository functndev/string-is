import { output as htmlOutput } from '@lib/outputs/HtmlOutput'

export const id = 'html'

export const output = 'html'

export const operation = (input: string): string => {
  return htmlOutput(input)
}
