import { Function } from './../types'
import { complement } from './../boolean/complement'

type Reject = <T>(compareFn: Function<T, boolean>) => (xs: T[]) => T[]
const reject: Reject =
  (compareFn) =>
    (xs) =>
      xs.filter(complement(compareFn))

export
{ reject
}
