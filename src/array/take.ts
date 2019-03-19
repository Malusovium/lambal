type Take = (n: number) => <T>(xs: T[]) => T[]
const take: Take = (n) => (xs) =>
  n >= 0
   ? xs.slice(0, n)
   : xs.slice(n)

export
{ take
}
