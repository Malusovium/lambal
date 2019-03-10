import { Function } from './../types'

type Thrush = <A>(a: A) => <B>(f: Function<A, B>) => B
const thrush: Thrush = (a) => (f) => f (a)

export
{ thrush
}
