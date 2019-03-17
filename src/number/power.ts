type Power = (n1: number) => (n2: number) => number
const power: Power = (n1) => (n2) => n2 ** n1

export
{ power
}
