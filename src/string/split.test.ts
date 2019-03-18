import test from 'ava'

import { split } from './split'

test
( 'split is a function'
, (t) => {
    const splitType = typeof split
    t.is(splitType, 'function')
  }
)

test
( `split return's a function`
, (t) => {
    const splitReturnType = typeof split ('')
    t.is(splitReturnType, 'function')
  }
)

test
( 'split works properly'
, (t) => {
    t.deepEqual( split ('') (''), [])
    t.deepEqual( split ('') (' '), [ ' ' ])
    t.deepEqual( split ('a') ('0a1a2a3'), [ '0', '1', '2', '3' ])
    t.deepEqual( split ('a') ('a0a1a2a3a'), [ '', '0', '1', '2', '3', '' ])
  }
)
