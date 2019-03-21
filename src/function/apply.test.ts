import test from 'ava'

import { apply } from './apply'
test
( 'apply is a function'
, (t) => {
    const applyType = typeof apply
    t.is(applyType, 'function')
  }
)

test
( 'apply returns a function'
  , (t) => {
    const applyReturnType = typeof apply ( () => {} )
    t.is(applyReturnType, 'function')
  }
)

test
( 'apply calls the function correctly'
, (t) => {
    const sayHi = (a: null) => 'hi'
    const appliedSayHi = apply (sayHi)
    const appliedSayHiType = typeof appliedSayHi
    t.is(appliedSayHiType, 'function')
    t.is(appliedSayHi (null), 'hi')
  }
)
