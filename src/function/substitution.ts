import { Function } from './../types'

type ABCFunction<A, B, C> = (a: A) => (b: B) => C
type Substitution = <A, B, C>(gf: ABCFunction<A, B, C>) => (f: Function<A, B>) => (a: A) => C
const substitution: Substitution = (g) => (f) => (a) => g (a) ( f (a))

export
{ substitution
}
