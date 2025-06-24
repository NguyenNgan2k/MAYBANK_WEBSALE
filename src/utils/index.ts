export function StringToInt(pString: string | number | any): number {
  pString = "" + pString;
  pString = pString.replace(/,/g, "");
  let vInt = parseInt(pString, 10);
  if (isNaN(vInt)) {
    return 0;
  } else {
    return vInt;
  }
}
