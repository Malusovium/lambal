import test from 'ava'

import { constant } from './constant'

test
( 'constant is a function'
, (t) => {
    const constantType = typeof constant
    t.is(constantType, 'function')
  }
)

test
( 'constant returns a function'
  , (t) => {
    const constantReturnType = typeof constant (null)
    t.is(constantReturnType, 'function')
  }
)

test
( `constant always returns it's first input`
  , (t) => {
    const keepNull = constant (null)
    const keepSayHi = constant (() => 'hi')
    t.is(keepNull(20) , null)
    t.is(keepNull('a string') , null)
    t.is(keepNull(['a', 'b', 'c']) , null)
    t.is(keepNull(() => {}) , null)
    t.is(keepSayHi(1000)() , 'hi')
    t.is(keepSayHi('another string')() , 'hi')
    t.is(keepSayHi(['a', 'b', 'c'])() , 'hi')
    t.is(keepSayHi(() => null)() , 'hi')
  }
)
