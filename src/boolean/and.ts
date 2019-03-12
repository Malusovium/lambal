type And = (b1: boolean) => (b2: boolean) => boolean
const and: And = (b1) => (b2) => b1 && b2

export
{ and
}
