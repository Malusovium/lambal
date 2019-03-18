type Split = (splitAt: string) => (s: string) => string[]
const split: Split = (splitAt) => (s) => s.split(splitAt)

export
{ split
}
