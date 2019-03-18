import test from 'ava'

import { lower } from './lower'

test
( 'lower is a function'
, (t) => {
    const lowerType = typeof lower
    t.is(lowerType, 'function')
  }
)

test
( 'lower works properly'
, (t) => {
    t.is(lower (''), '')
    t.is(lower ('ABCDE'), 'abcde')
    t.is(lower ('12345'), '12345')
  }
)
