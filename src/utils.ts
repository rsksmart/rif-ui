const shortenString = (
  str: string,
  largerThan = 16,
  charsShownCount = 6,
): string => (str.length > largerThan
  ? `${str.substr(0, charsShownCount)}...${str.substr(str.length - 4)}`
  : str)

const removeEmptySpaces = (str: string): string => str.replace(/\s/g, '')

const maxSupportedNumber = 99999999999999
const minSupportedNumber = 0.000001

const validatedNumber = (num: number): number => {
  if (num > 0) {
    if (num > maxSupportedNumber) return maxSupportedNumber

    if (num < minSupportedNumber) return minSupportedNumber
  }

  if (num < 0) {
    if (num < -maxSupportedNumber) return -maxSupportedNumber

    if (num > -minSupportedNumber) return -minSupportedNumber
  }
  return num
}

export {
  shortenString,
  removeEmptySpaces,
  maxSupportedNumber,
  minSupportedNumber,
  validatedNumber,
}
