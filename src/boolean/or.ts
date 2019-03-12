type Or = (b1: boolean) => (b2: boolean) => boolean
const or: Or = (b1) => (b2) => (b1 || b2)

export
{ or
}
