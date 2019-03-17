import test from 'ava'

import { add } from './add'

test
( 'add is a function'
, (t) => {
    const addType = typeof add
    t.is(addType, 'function')
  }
)

test
( `add return's a function`
, (t) => {
    const addReturnType = typeof add (0)
    t.is(addReturnType, 'function')
  }
)

test
( 'add works properly'
, (t) => {
    t.is(add (10) (5), 15)
    t.is(add (-5) (-10), -15)
  }
)
