const shortenAddress = (address: string): string => `${address.substr(0, 6)}...${address.substr(address.length - 4)}`

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
  shortenAddress,
  removeEmptySpaces,
  maxSupportedNumber,
  minSupportedNumber,
  validatedNumber,
}
