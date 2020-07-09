declare const shortenString: (str: string, largerThan?: number, charsShownCount?: number) => string;
declare const removeEmptySpaces: (str: string) => string;
declare const maxSupportedNumber = 99999999999999;
declare const minSupportedNumber = 0.000001;
declare const validatedNumber: (num: number) => number;
export { shortenString, removeEmptySpaces, maxSupportedNumber, minSupportedNumber, validatedNumber };
