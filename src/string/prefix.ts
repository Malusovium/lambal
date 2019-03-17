type Prefix = (s1: string) => (s2: string) => string
const prefix: Prefix = (s1) => (s2) => `${s1}${s2}`

export
{ prefix
}
