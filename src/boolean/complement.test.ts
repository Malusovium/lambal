import test from 'ava'

import { complement } from './complement'

test
( 'complement is a function'
, (t) => {
    const complementType = typeof complement
    t.is(complementType, 'function')
  }
)

test
( 'complement returns a function'
, (t) => {
    const complementReturnType = typeof complement (() => false)
    t.is(complementReturnType, 'function')
  }
)

test
( 'complement returns returns a boolean'
, (t) => {
    const complementReturnReturnType = typeof (() => false) ()
    t.is(complementReturnReturnType, 'boolean')
  }
)

test
( 'complement works properly'
, (t) => {
    const alwayTrue = () => true
    const alwaysFalse = () => false
    const greaterThan = ([n1, n2]: [number, number]) => n1 > n2

    t.is(complement (alwayTrue) ({}), false)
    t.is(complement (alwaysFalse) ({}), true)
    t.is(complement (greaterThan) ([10, 5]), false)
    t.is(complement (greaterThan) ([5, 10]), true)
  }
)
