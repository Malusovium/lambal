import test from 'ava'

import { times } from './times'

test
( 'times is a function'
, (t) => {
    const timesType = typeof times
    t.is(timesType, 'function')
  }
)

test
( 'times returns a function'
, (t) => {
    const timesReturnType = typeof times (5)
    t.is(timesReturnType, 'function')
  }
)

test
( 'times works properly'
, (t) => {
    t.is(times (10) (5), 50)
    t.is(times (-5) (10), -50)
    t.is(times (-1) (1), -1)
  }
)
