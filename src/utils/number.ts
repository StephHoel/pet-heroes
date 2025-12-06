export function NumberParseFloat(value: string) {
  return Number.parseFloat(value.replace(',', '.'))
}
