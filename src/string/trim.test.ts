import test from 'ava'

import { trim } from './trim'

test
( 'trim is a function'
, (t) => {
    const trimType = typeof trim
    t.is(trimType, 'function')
  }
)

test
( 'trim works properly'
, (t) => {
    t.is( trim (''), '')
    t.is( trim (' '), '')
    t.is( trim (' h'), 'h')
    t.is( trim ('h '), 'h')
    t.is( trim (' hh '), 'hh')
    t.is( trim (' h h '), 'h h')
  }
)
