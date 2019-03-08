import { Function } from './../types'

type ABCFunction<A, B, C> = (a: A) => (b: B) => C
type Flip = <A, B, C>(f: ABCFunction<A, B, C>) => ABCFunction<B, A, C>
const flip: Flip = (f) => (a) => (b) => f (b) (a)

export
{ flip
}
