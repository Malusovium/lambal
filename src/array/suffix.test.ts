import test from 'ava'

import { suffix } from './suffix'

test
( 'suffix is a function'
, (t) => {
    const prefixType = typeof suffix
    t.is(prefixType, 'function')
  }
)

test
( 'suffix returns a function'
, (t) => {
    const prefixReturnType = typeof suffix (null)
    t.is(prefixReturnType, 'function')
  }
)

test
( 'suffix appends an element to the list'
, (t) => {
    t.deepEqual
      ( suffix (null) ([])
      , [null]
      )
    t.deepEqual
      ( suffix (null) ([null])
      , [null, null]
      )
    t.deepEqual
      ( suffix (2) ([0, 1])
      , [ 0, 1, 2 ]
      )
    t.deepEqual
      ( suffix ([1, 2]) ([ [0, 1] ])
      , [ [0, 1], [1, 2] ]
      )
  }
)
