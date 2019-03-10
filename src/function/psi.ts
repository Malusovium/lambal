import { Function } from './../types'

type BBCFunction<B, C> = (b1: B) => (b2: B) => C
type Psi = <B, C>(g: BBCFunction<B, C>) => <A>(f: Function<A, B>) => (a1: A) => (a2: A) => C
const psi: Psi = (g) => (f) => (a1) => (a2) => g (f (a1)) (f (a2))

export
{ psi
}
