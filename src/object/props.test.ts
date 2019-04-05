import test from 'ava'

import { props } from './props'

test
( 'prop is a function'
, (t) => {
    const propType = typeof props
    t.is(propType, 'function')
  }
)

test
( 'prop returns a function'
, (t) => {
    const propReturnType = typeof props
    t.is(propReturnType, 'function')
  }
)

test
( 'prop works properly'
, (t) => {
    t.deepEqual(props (['']) ({}), {})
    t.deepEqual(props (['say']) ({say: 'hi'}), {say: 'hi'})
    t.deepEqual
      ( props (['say']) ({say: 'hi', eat: 'apple'})
      , {say: 'hi'}
      )
  }
)
