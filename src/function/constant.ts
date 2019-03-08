type Constant = <A, B>(a: A) => (b: B) => A
const constant: Constant = (a) => (b) => a

export
{ constant
}
