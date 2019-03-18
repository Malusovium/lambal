import test from 'ava'

import { capitalize } from './capitalize'

test
( 'capitalize is a function'
, (t) => {
    const capitalizeType = typeof capitalize
    t.is(capitalizeType, 'function')
  }
)

test
( 'capitalize works correctly'
, (t) => {
    t.is(capitalize (''), '')
    t.is(capitalize ('h'), 'H')
    t.is(capitalize ('some sentence'), 'Some sentence')
    t.is(capitalize ('H'), 'H')
    t.is(capitalize ('the'), 'The')
    t.is(capitalize ('$'), '$')
    t.is(capitalize ('1'), '1')
  }
)
