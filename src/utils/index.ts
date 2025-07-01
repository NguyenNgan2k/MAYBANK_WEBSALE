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

function pick(...manyMoreArgs: any[]) {
  let a = manyMoreArgs,
    c,
    r,
    u = a.length;
  for (c = 0; c < u; c++)
    if (((r = a[c]), void 0 !== r && null !== r)) return r;
}

export function numberFormat(
  h: string | number,
  c: number = 0,
  t: string = "",
  r: any = undefined,
  u: any = undefined
) {
  if (h === "ATO" || h === "ATC") return h;
  h = +h || 0;
  c = +c;
  let w: number | string = (h.toString().split(".")[1] || "").split("e")[0]
      .length,
    n,
    g,
    d = h.toString().split("e");

  g = (
    Math.abs(d[1] ? Number(d[0]) : h) + Math.pow(10, -Math.max(c, w) - 1)
  ).toFixed(c);
  w = String(parseInt(g, 10));
  n = 3 < w.length ? w.length % 3 : 0;
  r = pick(r, ".");
  u = pick(u, ",");
  h = (0 > h ? "-" : "") + (n ? w.substr(0, n) + u : "");
  h += w.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + u);
  c && (h += r + g.slice(-c));
  d[1] && 0 !== +h && (h += "e" + d[1]);
  if (Number(h) == 0) return t;
  return h;
}
