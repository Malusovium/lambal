import test from 'ava'

import { filter } from './filter'

test
( 'filter is a function'
, (t) => {
    const filterType = typeof filter
    t.is(filterType, 'function')
  }
)

test
( 'filter returns a function'
, (t) => {
    const filterReturnType = typeof filter ((a: null) => false)
    t.is(filterReturnType, 'function')
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
      ( filter (isNonWhiteSpace) ([' ', 'T', 'h', 'e', ' '])
      , ['T', 'h', 'e']
      )
    t.deepEqual
      ( filter (isNumber) (['a', '0', '2', '1', 'B', 'a'])
      , [ '0', '2', '1' ]
      )
  }
)
