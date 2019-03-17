import test from 'ava'

import { divide } from './divide'

test
( 'divide is a function'
, (t) => {
    const divideType = typeof divide
    t.is(divideType, 'function')
  }
)

test
( `divide return's a function`
, (t) => {
    const divideReturnType = typeof divide (10)
    t.is(divideReturnType, 'function')
  }
)

test
( `divide works properly`
, (t) => {
    t.is(divide (6) (2), 3)
    t.is(divide (1) (5), 0.2)
    t.is(divide (42) (0), Infinity)
    t.is(divide (42) (-0), -Infinity)
  }
)
