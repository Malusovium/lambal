import test from 'ava'

import { prefix } from './prefix'

test
( 'prefix is a function'
, (t) => {
    const prefixType = typeof prefix
    t.is(prefixType, 'function')
  }
)

test
( 'prefix returns a function'
, (t) => {
    const prefixReturnType = typeof prefix ('to')
    t.is(prefixReturnType, 'function')
  }
)

test
( 'prefix works properly'
, (t) => {
    t.is( prefix ('to ') ('NewYork'), 'to NewYork')
    t.is( prefix ('') (''), '')
    t.is( prefix ('') ('This is a sentence'), 'This is a sentence')
    t.is( prefix ('The') (''), 'The')
  }
)
