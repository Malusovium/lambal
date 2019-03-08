import test from 'ava'

import { flip } from './flip'

test
( 'flip is a function'
, (t) => {
    const flipType = typeof flip

    t.is(flipType, 'function')
  }
)

test
( `flip return's a function`
, (t) => {
    const flipReturnType = typeof flip ( (a: null) => (b: null) => null )

    t.is(flipReturnType, 'function')
  }
)

test
( `flip return's return's a function`
, (t) => {
    const flipReturnReturnType = typeof flip ( (a: null) => (b: null) => null ) (null)

    t.is(flipReturnReturnType, 'function')
  }
)

test
( `properly flips "A" and "B"`
, (t) => {
    const substract = (a: number) => (b: number) => a - b
    const flippedSubstract = flip (substract)

    t.is(substract (10) (5), 5)
    t.is(flippedSubstract (10) (5), -5)
  }
)
