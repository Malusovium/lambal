import test from 'ava'

import { values } from './values'

test
( 'values is a function'
, (t) => {
    const valuesType = typeof values
    t.is(valuesType, 'function')
  }
)

test
( 'values works properly'
, (t) => {
    t.deepEqual(values ({}), [])
    t.deepEqual(values ({say: 'hi'}), ['hi'])
    t.deepEqual(values ({say: 'hi', times: 10}), (['hi', 10]))
  }
)
