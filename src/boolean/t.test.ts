import test from 'ava'

import { t } from './t'

test
( 't is a function'
, (tc) => {
    const tType = typeof t

    tc.is(tType, 'function')
  }
)

test
( `t return's a boolean`
, (tc) => {
    const tReturnType = typeof t (null)

    tc.is(tReturnType, 'boolean')
  }
)

test
( `t return's false`
, (tc) => {
    const tReturn = t (null)

    tc.is(tReturn, true)
  }
)
