import test from 'ava'

import { merge } from './merge'

test
( 'merge is a function'
, (t) => {
    const mergeType = typeof merge
    t.is(mergeType, 'function')
  }
)

test
( 'merge returns a function'
, (t) => {
    const mergeType = typeof merge ({})
    t.is(mergeType, 'function')
  }
)

test
( 'merge works properly'
, (t) => {
    t.deepEqual(merge ({}) ({}), {})
    t.deepEqual(merge ({say: 'hi'}) ({}), {say: 'hi'})
    t.deepEqual
      ( merge
        ( { say: 'hi'
          }
        )
        ( {} )
      , { say: 'hi' }
      )
    t.deepEqual
      ( merge
        ( { say: 'hi'
          }
        )
        ( { say: 0
          }
        )
      , { say: 'hi' }
      )
  }
)
