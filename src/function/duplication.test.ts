import test from 'ava'

import { duplication } from './duplication'

test
( 'duplication is a function'
, (t) => {
    const duplicationType = typeof duplication
    t.is(duplicationType, 'function')
  }
)

test
( 'duplication returns a function'
, (t) => {
    const duplicationReturnType = typeof duplication ( (a1: null) => (a2: null) => null)
    t.is(duplicationReturnType, 'function')
  }
)

test
( 'duplication with add doubles it'
, (t) => {
    const add = (a: number) => (b: number) => a + b
    const double = duplication (add)
    t.is(double(5) , 10)
    t.is(double(-5) , -10)
    t.is(double(0) , 0)
  }
)

test
( 'duplication with times takes it to the second power'
, (t) => {
    const times = (a: number) => (b: number) => a * b
    const powerOf2 = duplication (times)
    t.is (powerOf2 (12) , 144)
    t.is (powerOf2 (-3) , 9)
    t.is (powerOf2 (1) , 1)
  }
)
