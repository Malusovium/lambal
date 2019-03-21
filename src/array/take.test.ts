import test from 'ava'

import { take } from './take'

test
( 'take is a function'
, (t) => {
    const takeType = typeof take
    t.is(takeType, 'function')
  }
)

test
( 'take returns a function'
, (t) => {
    const takeReturnType = typeof take (0)
    t.is(takeReturnType, 'function')
  }
)

test
( 'take works properly'
, (t) => {
    t.deepEqual(take (0) ([]), [])
    t.deepEqual(take (10) ([]), [])
    t.deepEqual(take (1) ([ 0, 1 ]), [ 0 ])
    t.deepEqual(take (3) ([ 0, 1, 2, 3 ]), [ 0, 1, 2 ])
    t.deepEqual(take (-1) ([ 0, 1, 2, 3 ]), [ 3 ])
    t.deepEqual(take (-3) ([ 0, 1, 2, 3 ]), [ 1, 2, 3 ])
    t.deepEqual(take (0) ([ 0, 1, 2 ]), [])
    t.deepEqual(take (-0) ([ 0, 1, 2 ]), [])
  }
)
