import test from 'ava'

import { has } from './has'

test
( 'has is a function'
, (t) => {
    const hasType = typeof has
    t.is(hasType, 'function')
  }
)

test
( 'has returns a function'
, (t) => {
    const hasReturnType = typeof has ('hi')
    t.is(hasReturnType, 'function')
  }
)

test
( 'has works properly'
, (t) => {
    t.is(has ('') ({}), false)
    t.is(has ('say') ({say: 'hi'}), true)
    t.is(has ('eat') ({say: 'hi'}), false)
    t.is(has ('eat') ({say: 'hi', eat: 'apple'}), true)
  }
)
