type Prefix = <T>(x: T) => (xs: T[]) => T[]
const prefix: Prefix = (x) => (xs) => [ x, ...xs ]

export
{ prefix
}
