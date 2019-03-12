import test from 'ava'

import { isOfType } from './isOfType'

test
( 'isOfType is a function'
, (t) => {
    const isOfTypeType = typeof isOfType
    t.is(isOfTypeType, 'function')
  }
)

test
( `isOfType return's function`
, (t) => {
    const isOfTypeReturnType = typeof isOfType ('null')
    t.is(isOfTypeReturnType, 'function')
  }
)

test
( `isOfType works with "undefined"`
, (t) => {
    t.is(isOfType ('undefined') (undefined), true)
  }
)

test
( `isOfType works with "null"`
, (t) => {
    t.is(isOfType ('null') (null), true)
  }
)

test
( `isOfType works with "boolean"`
, (t) => {
    t.is(isOfType ('boolean') (false), true)
    t.is(isOfType ('boolean') (true), true)
  }
)

test
( `isOfType works with "number"`
, (t) => {
    t.is(isOfType ('number') (10), true)
    t.is(isOfType ('number') (42 / -0), true)
    t.is(isOfType ('number') (42 / 0), true)
    t.is(isOfType ('number') (999999999999), true)
    t.is(isOfType ('number') (-999999999999), true)
  }
)

test
( `isOfType works with "string"`
, (t) => {
    t.is(isOfType ('string') (''), true)
    t.is(isOfType ('string') ('c'), true)
    t.is(isOfType ('string') ("Word"), true)
    t.is(isOfType ('string') (`String`), true)
  }
)

test
( `isOfType works with "array"`
, (t) => {
    t.is(isOfType ('array') ([]), true)
    t.is(isOfType ('array') ([ 0, 1, 2, 3, 4]), true)
    t.is(isOfType ('array') ([ '0', '1', '2', '3', '4']), true)
    t.is(isOfType ('array') ([ { key: 'value' }, { key: 'value'} ]), true)
  }
)

test
( `isOfType works with "object"`
, (t) => {
    t.is(isOfType ('object') ({ key: 'value' }), true)
    t.is(isOfType ('object') ({ '0': 'value' }), true)
    t.is(isOfType ('object') ({}), true)
  }
)

test
( `isOfType works with "function"`
, (t) => {
    t.is(isOfType ('function') (() => {}), true)
  }
)

test
( `isOfType works with "promise"`
, (t) => {
    t.is(isOfType ('promise') (Promise.resolve()), true)
  }
)

test
( `isOfType works with "symbol"`
, (t) => {
    t.is(isOfType ('symbol') (Symbol()), true)
    t.is(isOfType ('symbol') (Symbol('foo')), true)
    t.is(isOfType ('symbol') (Symbol(10)), true)
  }
)
