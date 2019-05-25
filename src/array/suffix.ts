type Suffix = <T>(x: T) => (xs: T[]) => T[]
const suffix: Suffix = (x) => (xs) => [ ...xs, x ]

export
{ suffix
}
