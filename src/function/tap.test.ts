import test from 'ava'

import { tap } from './tap'

test
( 'tap is a function'
, (t) => {
    const tapType = typeof tap
    t.is(tapType, 'function')
  }
)

test
( 'tap returns a function'
, (t) => {
    const tapReturnType = typeof tap (() => {})
    t.is(tapReturnType, tapReturnType)
  }
)

test
( 'tap works properly'
, (t) => {
    let one = 0
    const zero = tap ((x:number) => {one = 1}) (one)
    t.is(one, 1)
    t.is(zero, 0)
  }
)
