import test from 'ava'

import { map } from './map'

test
( 'map is a function'
, (t) => {
    const mapType = typeof map
    t.is(mapType, 'function')
  }
)

test
( `map return's a function`
, (t) => {
    const mapReturnType = typeof map ((a: null) => null)
    t.is(mapReturnType, 'function')
  }
)

test
( 'map works properly'
, (t) => {
    const double = (n: number) => n * 2
    const times = (n1: number) => (n2: number) => n1 * n2

    t.deepEqual(map (double) ([0, 1, 2, 3, 4, 5, 6]), [0, 2, 4, 6, 8, 10, 12])
    t.deepEqual(map (times (5)) ([1, 2, 3]), [5, 10, 15])
    t.deepEqual(map (times (5)) ([]), [])
  }
)
