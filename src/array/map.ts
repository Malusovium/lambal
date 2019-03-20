import { Function } from './../types'
type Map = <A, B>(fn: Function<A, B>) => (xs: A[]) => B[]
const map: Map = (fn) => (xs) => xs.map(fn)

export
{ map
}
