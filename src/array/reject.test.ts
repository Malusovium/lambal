import test from 'ava'

import { reject } from './reject'

test
( 'filter is a function'
, (t) => {
    const rejectType = typeof reject
    t.is(rejectType, 'function')
  }
)

test
( `filter return's a function`
, (t) => {
    const rejectReturnType = typeof reject ((a: null) => false)
    t.is(rejectReturnType, 'function')
  }
)

test
( 'filter works properly'
, (t) => {
    const isNonWhiteSpace = (s: string) => s !== ' '
    const isNumber = (s: string) => {
      const numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
      return numbers.includes(s)
    }

    t.deepEqual
      ( reject (isNonWhiteSpace) ([' ', 'T', 'h', 'e', ' '])
      , [' ', ' ']
      )
    t.deepEqual
      ( reject (isNumber) (['a', '0', '2', '1', 'B', 'a'])
      , [ 'a', 'B', 'a' ]
      )
  }
)
