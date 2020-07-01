declare const shortenAddress: (address: string) => string;
declare const removeEmptySpaces: (str: string) => string;
declare const maxSupportedNumber = 99999999999999;
declare const minSupportedNumber = 1e-12;
declare const validatedNumber: (num: number) => number;
export { shortenAddress, removeEmptySpaces, maxSupportedNumber, minSupportedNumber, validatedNumber, };
