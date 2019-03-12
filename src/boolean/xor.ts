type Xor = (b1: boolean) => (b2: boolean) => boolean
const xor: Xor = (b1) => (b2) => (b1 === true && b2 === false) || (b1 === false && b2 === true)

export
{ xor
}
