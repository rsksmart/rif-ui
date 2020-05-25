export const shortenAddress = (address: string) => `${address.substr(0, 6)}...${address.substr(address.length - 4 - 1, 4)}`

export const removeEmptySpaces = (str: string) => str.replace(/\s/g, '')

export default {
  shortenAddress,
  removeEmptySpaces,
}
