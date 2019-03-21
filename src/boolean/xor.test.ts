import test from 'ava'

import { xor } from './xor'

test
( 'xor is a function'
, (t) => {
    const xorType = typeof xor

    t.is(xorType, 'function')
  }
)

test
( 'xor returns a function'
, (t) => {
    const xorReturnType = typeof xor (true)

    t.is(xorReturnType, 'function')
  }
)

test
( 'xor returns returns a boolean'
, (t) => {
    const xorReturnReturnType = typeof xor (true) (false)

    t.is(xorReturnReturnType, 'boolean')
  }
)

test
( 'xor works properly'
, (t) => {
    const xorFF = xor (false) (false)
    const xorFT = xor (false) (true)
    const xorTF = xor (true) (false)
    const xorTT = xor (true) (true)

    t.is(xorFF, false)
    t.is(xorFT, true)
    t.is(xorTF, true)
    t.is(xorTT, false)
  }
)
