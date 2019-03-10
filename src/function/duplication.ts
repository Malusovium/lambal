type AABFunction <A, B> = (a1: A) => (a2: A) => B
type Duplication = <A, B> (f: AABFunction<A, B>) => (a: A) => B
const duplication: Duplication = (f) => (a) => f (a) (a)

export
{ duplication
}
