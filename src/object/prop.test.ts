import test from 'ava'

import { prop } from './prop'

test
( 'prop is a function'
, (t) => {
    const propType = typeof prop
    t.is(propType, 'function')
  }
)

test
( 'prop returns a function'
, (t) => {
    const propReturnType = typeof prop ('')
    t.is(propReturnType, 'function')
  }
)

test
( 'prop works properly'
, (t) => {
    t.is(prop ('') ({}), undefined)
    t.is(prop (0) ({0: 1}), 1)
    t.is(prop ('say') ({say: 'hi'}), 'hi')
  }
)
