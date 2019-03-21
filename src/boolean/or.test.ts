import test from 'ava'

import { or } from './or'

test
( 'or is a function'
, (t) => {
    const orType = typeof or
    t.is(orType, 'function')
  }
)

test
( 'or returns a function'
, (t) => {
    const orReturnType = typeof or (false)
    t.is(orReturnType, 'function')
  }
)

test
( 'or returns returns a boolean'
, (t) => {
    const orReturnReturnType = typeof or (false) (true)
    t.is(orReturnReturnType, 'boolean')
  }
)

test
( 'or works properly'
, (t) => {
    const orFF = or (false) (false)
    const orFT = or (false) (true)
    const orTF = or (true) (false)
    const orTT = or (true) (true)

    t.is(orFF, false)
    t.is(orFT, true)
    t.is(orTF, true)
    t.is(orTT, true)
  }
)
