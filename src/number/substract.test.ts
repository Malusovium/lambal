import test from 'ava'

import { substract } from './substract'

test
( 'substract is a function'
, (t) => {
    const substractType = typeof substract
    t.is(substractType, 'function')
  }
)

test
( 'substract returns a function'
, (t) => {
    const substractReturnType = typeof substract (10)
    t.is(substractReturnType, 'function')
  }
)

test
( 'substract works properly'
, (t) => {
    const substract10 = substract (10)

    t.is(substract10 (30), 20)
    t.is(substract (20) (62), 42)
    t.is(substract (-50) (-30), (20))
    t.is(substract (-5) (20), 25)
  }
)
