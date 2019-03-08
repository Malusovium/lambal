import test from 'ava'
import { testAdd } from './index'

test
( 'testAdd is a function'
, (t) => {
    const testAddType = typeof testAdd
    t.is(testAddType, 'function')
  }
)

test
( 'testAdd returns a function'
, (t) => {
    const testAddReturnType = typeof testAdd(1)
    t.is(testAddReturnType, 'function')
  }
)

test
( 'testAdd does proper addition'
, (t) => {
    const be10 = testAdd (1) (9)
    const be20 = testAdd (10) (10)
    const be10000000000 = testAdd (9000000000) (1000000000)

    t.is(be10, 10)
    t.is(be20, 20)
    t.is(be10000000000, 10000000000)
  }
)
