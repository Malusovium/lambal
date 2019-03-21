import test from 'ava'

import { and } from './and'

test
( 'and is a function'
, (t) => {
    const andType = typeof and
    t.is(andType, 'function')
  }
)

test
( 'and returns a function'
, (t) => {
    const andReturnType = typeof and (false)
    t.is(andReturnType, 'function')
  }
)

test
( 'and returns returns type is a boolean'
, (t) => {
    const andReturnReturnType = typeof and (false) (true)
    t.is(andReturnReturnType, 'boolean')
  }
)

test
( 'and works properly'
, (t) => {
    const andFF = and (false) (false)
    const andFT = and (false) (true)
    const andTF = and (true) (false)
    const andTT = and (true) (true)
    t.is(andFF, false)
    t.is(andFT, false)
    t.is(andTF, false)
    t.is(andTT, true)
  }
)
