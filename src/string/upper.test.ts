import test from 'ava'

import { upper } from './upper'

test
( 'upper is a function'
, (t) => {
    const upperType = typeof upper
    t.is(upperType, 'function')
  }
)

test
( 'upper works properly'
, (t) => {
    t.is( upper (''), '')
    t.is( upper ('abcde'), 'ABCDE')
    t.is( upper ('12345'), '12345')
  }
)
