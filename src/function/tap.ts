import { Function } from './../types/function'

type Tap = <A>(f: Function<A, any>) => (a: A) => A
const tap: Tap = (f) => (a) => {f(a); return a}

export
{ tap
}
