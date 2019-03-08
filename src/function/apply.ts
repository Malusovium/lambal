import { Function } from './../types'

type Apply = <A, B>(f: Function<A, B>) => (a: A) => B
const apply: Apply = (f) => (a) => f (a)

export
{ apply
}
