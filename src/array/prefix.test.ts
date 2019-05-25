import test from 'ava'

import { prefix } from './prefix'

test
( 'prefix is a function'
, (t) => {
    const prefixType = typeof prefix
    t.is(prefixType, 'function')
  }
)

test
( 'prefix returns a function'
, (t) => {
    const prefixReturnType = typeof prefix (null)
    t.is(prefixReturnType, 'function')
  }
)

test
( 'prefix prepends an element to the list'
, (t) => {
    t.deepEqual
      ( prefix (null) ([])
      , [null]
      )
    t.deepEqual
      ( prefix (null) ([null])
      , [null, null]
      )
    t.deepEqual
      ( prefix (0) ([1, 2])
      , [ 0, 1, 2 ]
      )
    t.deepEqual
      ( prefix ([0, 1]) ([ [1, 2] ])
      , [ [0, 1], [1, 2] ]
      )
  }
)
