type Add = (n1: number) => (n2: number) => number
const add: Add = (n1) => (n2) => n1 + n2

export
{ add
}
