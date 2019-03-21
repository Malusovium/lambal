import test from 'ava'

import { suffix } from './suffix'

test
( 'prefix is a function'
, (t) => {
    const suffixType = typeof suffix
    t.is(suffixType, 'function')
  }
)

test
( 'prefix returns a function'
, (t) => {
    const suffixReturnType = typeof suffix ('to')
    t.is(suffixReturnType, 'function')
  }
)

test
( 'prefix works properly'
, (t) => {
    t.is( suffix (' degrees celcius') ('Twenty five'), 'Twenty five degrees celcius')
    t.is( suffix ('') (''), '')
    t.is( suffix ('') ('This is a sentence'), 'This is a sentence')
    t.is( suffix ('The') (''), 'The')
  }
)
