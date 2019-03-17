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
    t.is(divide (2) (6), 3)
    t.is(divide (5) (1), 0.2)
    t.is(divide (0) (42), Infinity)
    t.is(divide (-0) (42), -Infinity)
  }
)
