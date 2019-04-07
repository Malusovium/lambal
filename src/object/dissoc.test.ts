import test from 'ava'

import { dissoc } from './dissoc'

test
( 'dissoc is a function'
, (t) => {
    const dissocType = typeof dissoc
    t.is(dissocType, 'function')
  }
)

test
( 'dissoc returns a function'
, (t) => {
    const dissocReturnType = typeof dissoc ('prop')
    t.is(dissocReturnType, 'function')
  }
)

test
( 'dissoc works properly'
, (t) => {
    t.deepEqual(dissoc ('hi') ({}), ({}))
    t.deepEqual(dissoc ('say') ({say: "hi"}), {})
    t.deepEqual
      ( dissoc
        ('say')
        ( { say: 'hi'
          , eat: 'cookie'
          }
        )
      , { eat: 'cookie'
        }
      )
  }
)
