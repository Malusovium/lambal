import test from 'ava'

import { reduce } from './reduce'

test
( 'reduce is a function'
, (t) => {
    const reduceType = typeof reduce
    t.is(reduceType, 'function')
  }
)

test
( 'reduce returns a function'
, (t) => {
    const reduceReturnType = typeof reduce ((acc:null, curr: null) => null)
    t.is(reduceReturnType, 'function')
  }
)

test
( 'reduce returns returns a function'
, (t) => {
    const reduceReturnReturnType =
      typeof reduce
             ((acc:null, curr: null) => null)
             (null)
    t.is(reduceReturnReturnType, 'function')
  }
)

test
( 'reduce works properly'
, (t) => {
    const sumReducer = (acc: number, curr: number) => acc + curr
    const sum = reduce (sumReducer) (0)
    const joinReducer =
      (initial: string) =>
        (infix: string) =>
          (acc: string, curr: string | number) =>
            acc === initial
              ? `${acc}${curr}`
              : `${acc}${infix}${curr}`
    const INITIAL_JOIN = 'Joined: '
    const join = reduce(joinReducer (INITIAL_JOIN) (', ')) (INITIAL_JOIN)
    const allTrueReducer =
      (acc: boolean, curr: boolean) => curr ? acc : false
    const allTrue = reduce (allTrueReducer) (true)

    t.is(sum ([0, 1, 2, 3, 4, 5]), 15)
    t.is
      ( join ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
      , 'Joined: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9'
      )
    t.is(allTrue ([ true, true, true, false, true]), false)
  }
)
