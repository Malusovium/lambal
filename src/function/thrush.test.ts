import test from 'ava'

import { thrush } from './thrush'

test
( 'thrush is a function'
, (t) => {
    const thrushType = typeof thrush
    t.is(thrushType, 'function')
  }
)

test
( 'thrush returns a function'
, (t) => {
    const thrushReturnType = typeof thrush
    t.is(thrushReturnType, 'function')
  }
)

test
( 'thrush works properly'
, (t) => {
    const double = (x: number) => x * 2
    const callWith10 = thrush (10)
    t.is(callWith10 (double), 20)
  }
)
