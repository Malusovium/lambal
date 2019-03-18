type Suffix = (s1: string) => (s2: string) => string
const suffix: Suffix = (s1) => (s2) => `${s2}${s1}`

export
{ suffix
}
