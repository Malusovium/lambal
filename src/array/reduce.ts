type ReduceFn<A, C> = (acc:A, curr: C) => A
type Reduce = <A, C>(fn: ReduceFn<A, C>) => (initial: A) => (xs: C[]) => A

const reduce: Reduce =
  (fn) =>
    (initial) =>
      (xs) => xs.reduce(fn, initial)

export
{ reduce
}
