import { Function } from './../types'

type Compose =
  <B, C>(g: Function<B, C>) =>
    <A>(f: Function<A, B>) =>
      (a: A) => C
const compose: Compose = (g) => (f) => (a) => g ( f (a))

export
{ compose
}
