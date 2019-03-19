import test from 'ava'

import { drop } from './drop'

test
( 'drop is a function'
, (t) => {
    const dropType = typeof drop
    t.is(dropType, 'function')
  }
)

test
( 'drop works properly'
, (t) => {
    t.deepEqual(drop (0) ([]), [])
    t.deepEqual(drop (10) ([]), [])
    t.deepEqual(drop (1) ([ 0, 1 ]), [ 1 ])
    t.deepEqual(drop (3) ([ 0, 1, 2, 3 ]), [ 3 ])
    t.deepEqual(drop (-1) ([ 0, 1, 2, 3 ]), [ 0, 1, 2 ])
    t.deepEqual(drop (-3) ([ 0, 1, 2, 3 ]), [ 0 ])
    t.deepEqual(drop (0) ([ 0, 1, 2 ]), [ 0, 1, 2 ])
    t.deepEqual(drop (-0) ([ 0, 1, 2 ]), [ 0, 1, 2 ])

  }
)
