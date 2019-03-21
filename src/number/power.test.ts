import test from 'ava'

import { power } from './power'

test
( 'power is a function'
, (t) => {
    const powerType = typeof power
    t.is(powerType, 'function')
  }
)

test
( 'power returns a function'
, (t) => {
    const powerReturnType = typeof power (10)
    t.is(powerReturnType, 'function')
  }
)

test
( 'power works properly'
, (t) => {
    t.is(power (3) (2), 8)
    t.is(power (.5) (144), 12)
    t.is(power (-.5) (9), 1/3)
  }
)
