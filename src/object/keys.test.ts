import test from 'ava'

import { keys } from './keys'

test
( 'keys is a function'
, (t) => {
    const keysType = typeof keys
    t.is(keysType, 'function')
  }
)

test
( 'keys works properly'
, (t) => {
    t.deepEqual(keys ({}), [])
    t.deepEqual(keys ({say: 'hi'}), [ 'say' ])
    t.deepEqual(keys ({say: 'hi', 0: 'well'}), [ 0, 'say' ])
  }
)
