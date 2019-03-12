import { Function } from './../types'

type BooleanFunction<A> = Function<A, boolean>
type Complement = <A>(f: BooleanFunction<A>) => (a: A) => boolean
const complement: Complement = (f) => (a) => !(f (a))

export
{ complement
}
