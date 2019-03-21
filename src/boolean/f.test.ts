import test from 'ava'

import { f } from './f'

test
( 'f is a function'
, (t) => {
    const fType = typeof f

    t.is(fType, 'function')
  }
)

test
( 'f returns a boolean'
, (t) => {
    const fReturnType = typeof f (null)

    t.is(fReturnType, 'boolean')
  }
)

test
( 'f returns false'
, (t) => {
    const fReturn = f (null)

    t.is(fReturn, false)
  }
)
