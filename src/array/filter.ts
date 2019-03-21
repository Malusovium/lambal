import { Function } from './../types'

type Filter = <T>(compareFn: Function<T, boolean>) => (xs: T[]) => T[]
const filter: Filter = (compareFn) => (xs) => xs.filter(compareFn)

export
{ filter
}
