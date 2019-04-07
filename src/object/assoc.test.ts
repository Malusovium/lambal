import test from 'ava'

import { assoc } from './assoc'

test
( 'assoc is a function'
, (t) => {
    const assocType = typeof assoc
    t.is(assocType, 'function')
  }
)

test
( 'assoc returns a function'
, (t) => {
    const assocReturnType = typeof assoc ('prop')
    t.is(assocReturnType, 'function')
  }
)

test
( 'assoc returns returns a function'
, (t) => {
    const assocReturnReturnType = typeof assoc ('prop') (null)
    t.is(assocReturnReturnType, 'function')
  }
)

test
( 'assoc handles empty property'
, (t) => {
    t.deepEqual(assoc ('') (null) ({}), {'': null})
    t.deepEqual(assoc ('key') ('hi') ({}), { key: 'hi' })
    t.deepEqual
      ( assoc ('key') ('hi') ({ anotherKey: 'wow'} )
      , { key: 'hi'
        , anotherKey: 'wow'
        }
      )
    t.deepEqual
      ( assoc ('key') ('hi') ({key: 'wow'})
      , { key: 'hi' }
      )
  }
)
