import test from 'ava'

import { equals } from './equals'

test
( 'equals is a function'
, (t) => {
    const equalsType = typeof equals
    t.is(equalsType, 'function')
  }
)

test
( 'equals returns a function'
, (t) => {
    const equalsReturnType = typeof equals (null)
    t.is(equalsReturnType, 'function')
  }
)

test
( 'equals handles nulls'
, (t) => {
    const isNill = equals (null)

    t.is(isNill (null), true)
    t.is(isNill (undefined), false)
    t.is(isNill (false), false)
    t.is(isNill (true), false)
    t.is(isNill (0), false)
    t.is(isNill (-1), false)
    t.is(isNill (1), false)
    t.is(isNill (''), false)
    t.is(isNill ([]), false)
    t.is(isNill ({}), false)
  }
)

test
( `equals handles undefined`
, (t) => {
    const isUndefined = equals (undefined)

    t.is(isUndefined (null), false)
    t.is(isUndefined (undefined), true)
    t.is(isUndefined (false), false)
    t.is(isUndefined (true), false)
    t.is(isUndefined (0), false)
    t.is(isUndefined (-1), false)
    t.is(isUndefined (1), false)
    t.is(isUndefined (''), false)
    t.is(isUndefined ([]), false)
    t.is(isUndefined ({}), false)
  }
)

test
( `equals handles booleans`
, (t) => {
    const isFalse = equals (false)
    const isTrue = equals (true)

    t.is(isFalse (null), false)
    t.is(isFalse (undefined), false)
    t.is(isFalse (false), true)
    t.is(isFalse (true), false)
    t.is(isFalse (0), false)
    t.is(isFalse (-1), false)
    t.is(isFalse (1), false)
    t.is(isFalse (''), false)
    t.is(isFalse ([]), false)
    t.is(isFalse ({}), false)

    t.is(isTrue (null), false)
    t.is(isTrue (undefined), false)
    t.is(isTrue (false), false)
    t.is(isTrue (true), true)
    t.is(isTrue (0), false)
    t.is(isTrue (-1), false)
    t.is(isTrue (1), false)
    t.is(isTrue (''), false)
    t.is(isTrue ([]), false)
    t.is(isTrue ({}), false)
  }
)

test
( `equals handles numbers`
, (t) => {
    const isP10 = equals (10)
    const isP1 = equals (1)
    const is0 = equals (0)
    const isN1 = equals (-1)
    const isN10 = equals (-10)
    const isN9999999999999999 = equals (-9999999999999999)
    const isP9999999999999999 = equals (9999999999999999)

    t.is(isP10 (null), false)
    t.is(isP10 (undefined), false)
    t.is(isP10 (false), false)
    t.is(isP10 (true), false)
    t.is(isP10 (0), false)
    t.is(isP10 (-1), false)
    t.is(isP10 (1), false)
    t.is(isP10 (''), false)
    t.is(isP10 ([]), false)
    t.is(isP10 ({}), false)
    t.is(isP10 (10), true)

    t.is(isP1 (null), false)
    t.is(isP1 (undefined), false)
    t.is(isP1 (false), false)
    t.is(isP1 (true), false)
    t.is(isP1 (0), false)
    t.is(isP1 (-1), false)
    t.is(isP1 (1), true)
    t.is(isP1 (''), false)
    t.is(isP1 ([]), false)
    t.is(isP1 ({}), false)

    t.is(is0 (null), false)
    t.is(is0 (undefined), false)
    t.is(is0 (false), false)
    t.is(is0 (true), false)
    t.is(is0 (0), true)
    t.is(is0 (-1), false)
    t.is(is0 (1), false)
    t.is(is0 (''), false)
    t.is(is0 ([]), false)
    t.is(is0 ({}), false)

    t.is(isN1 (null), false)
    t.is(isN1 (undefined), false)
    t.is(isN1 (false), false)
    t.is(isN1 (true), false)
    t.is(isN1 (0), false)
    t.is(isN1 (-1), true)
    t.is(isN1 (1), false)
    t.is(isN1 (''), false)
    t.is(isN1 ([]), false)
    t.is(isN1 ({}), false)

    t.is(isN10 (null), false)
    t.is(isN10 (undefined), false)
    t.is(isN10 (false), false)
    t.is(isN10 (true), false)
    t.is(isN10 (0), false)
    t.is(isN10 (-1), false)
    t.is(isN10 (1), false)
    t.is(isN10 (''), false)
    t.is(isN10 ([]), false)
    t.is(isN10 (-10), true)

    t.is(isN9999999999999999 (null), false)
    t.is(isN9999999999999999 (undefined), false)
    t.is(isN9999999999999999 (false), false)
    t.is(isN9999999999999999 (true), false)
    t.is(isN9999999999999999 (0), false)
    t.is(isN9999999999999999 (-1), false)
    t.is(isN9999999999999999 (1), false)
    t.is(isN9999999999999999 (''), false)
    t.is(isN9999999999999999 ([]), false)
    t.is(isN9999999999999999 ({}), false)
    t.is(isN9999999999999999 (-9999999999999999), true)

    t.is(isP9999999999999999 (null), false)
    t.is(isP9999999999999999 (undefined), false)
    t.is(isP9999999999999999 (false), false)
    t.is(isP9999999999999999 (true), false)
    t.is(isP9999999999999999 (0), false)
    t.is(isP9999999999999999 (-1), false)
    t.is(isP9999999999999999 (1), false)
    t.is(isP9999999999999999 (''), false)
    t.is(isP9999999999999999 ([]), false)
    t.is(isP9999999999999999 ({}), false)
    t.is(isP9999999999999999 (9999999999999999), true)

    t.is(equals (-.99999) (-.9), false)
    t.is(equals (-.99999) (-.99), false)
    t.is(equals (-.99999) (-.999), false)
    t.is(equals (-.99999) (-.9999), false)
    t.is(equals (-.99999) (-.99999), true)
  }
)

test
( `equals handles strings`
, (t) => {
    const isSomeSentence = equals (`\nTest sentence with odd chars 1234567890!@#$%^&*()\n`)

    t.is(isSomeSentence (null), false)
    t.is(isSomeSentence (undefined), false)
    t.is(isSomeSentence (false), false)
    t.is(isSomeSentence (true), false)
    t.is(isSomeSentence (0), false)
    t.is(isSomeSentence (-1), false)
    t.is(isSomeSentence (1), false)
    t.is(isSomeSentence (''), false)
    t.is(isSomeSentence ([]), false)
    t.is(isSomeSentence ({}), false)
    t.is(isSomeSentence (`\nTest sentence with odd chars 1234567890!@#$%^&*()\n`), true)
    t.is(isSomeSentence ('\nTest sentence with odd chars 1234567890!@#$%^&*()\n'), true)
    t.is(isSomeSentence ("\nTest sentence with odd chars 1234567890!@#$%^&*()\n"), true)

    t.is(equals ('') (''), true)
  }
)

test
( `equals handles arrays`
, (t) => {
    const emptyArray: [] = []
    const n1Array = [ 0, 1, 2, 3, 4 ]
    const n2Array = [ [ 0, 1 ], '', [ '', '2'] ]
    const n3Array = [ [ [ 0, 1 ], [ '0', '1' ] ], [ '0', '1' ], 0, 1 ]

    t.is( equals (emptyArray) ([]), true)
    t.is( equals (n1Array) ([ 0, 1, 2, 3, 4 ]), true)
    t.is( equals (n2Array) ([ [ 0, 1 ], '', [ '', '2'] ]), true)
    t.is( equals (n3Array) ([ [ [ 0, 1 ], [ '0', '1' ] ], [ '0', '1' ], 0, 1 ]), true)
    // t.fail()
  }
)

test
( `equals handles objects`
, (t) => {
    const emptyObject = {}
    const n1Object =
      { _prop: 'value'
      , undefinedProp: undefined
      }
    const n1Objectf0 =
      { _prop: 'valu'
      , undefinedProp: undefined
      }
    const n1Objectf1 =
      { _prop: 'value'
      , undefinedProp: null
      }
    const n2Object =
      { sub:
        { val: null
        }
      , undefinedProp: undefined
      }
    const n2Objectf0 =
      { sub:
        { val: ''
        }
        , undefinedProp: null
      }
    const n2Objectf1 =
      { sub:
        { val: 10
        }
        , undefinedProp: null
      }
    const n3Object =
      { sub:
        { val: 131
        , sub2:
          { val: 2324
          , undefinedProp: undefined
          }
        }
      , arrayProp:
        [ 'some'
        , { name: 'John'
          }
        ]
      }
    const n3Objectf0 =
      { sub:
        { val: 131
          , sub2:
          { val: 23
            , undefinedProp: undefined
          }
        }
        , arrayProp:
        [ 'some'
          , { name: 'John'
            }
        ]
      }
    const n3Objectf1 =
      { sub:
        { val: 131
          , sub2:
          { val: 2324
            , undefinedProp: undefined
          }
        }
      }

    t.is(equals (emptyObject) ({}), true)
    t.is(equals (emptyObject) (null), false)
    t.is(equals (n1Object) (n1Object), true)
    t.is(equals (n1Object) (n1Objectf0), false)
    t.is(equals (n1Object) (n1Objectf1), false)
    t.is(equals (n2Object) (n2Object), true)
    t.is(equals (n2Object) (n2Objectf0), false)
    t.is(equals (n2Object) (n2Objectf1), false)
    t.is(equals (n3Object) (n3Object), true)
    t.is(equals (n3Object) (n3Objectf0), false)
    t.is(equals (n3Object) (n3Objectf1), false)
    // t.fail()
  }
)

