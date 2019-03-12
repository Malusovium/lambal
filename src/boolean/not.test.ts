import test from 'ava'

import { not } from './not'

test
( 'not is a function'
, (t) => {
    const notType = typeof not
    t.is(notType, 'function')
  }
)

test
( `not return's a boolean`
, (t) => {
    const notReturnType = typeof not (false)
    t.is(notReturnType, 'boolean')
  }
)

test
( 'not works properly'
, (t) => {
    t.is(not (true), false)
    t.is(not (false), true)
  }
)
