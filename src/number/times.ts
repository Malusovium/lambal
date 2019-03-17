type Times = (n1: number) => (n2: number) => number
const times: Times = (n1) => (n2) => n1 * n2

export
{ times
}
