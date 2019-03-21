import test from 'ava'

import { substitution } from './substitution'

test
( 'substitution is a function'
, (t) => {
    const substitutionType = typeof substitution
    t.is(substitutionType, 'function')
  }
)

test
( 'substitution returns a function'
, (t) => {
    const substitutionReturnType =
      typeof substitution ( (a: null) => (b: null) => null)
    t.is(substitutionReturnType, 'function')
  }
)

test
( 'substitution returns returns a function'
, (t) => {
    const substitutionReturnReturnType =
      typeof substitution ( (a: null) => (b: null) => null ) ( (a:null) => null )
    t.is(substitutionReturnReturnType, 'function')
  }
)

test
( 'substitution works properly'
, (t) => {
    const showFormula = (x: number) => (y: number) => `f(${x}) = ${y}`
    const fDouble = (x:number) => x * 2
    const fQuadratic = (x:number) => x * x
    const fPower =
      (x:number): number => {
        const callPowerNTimes = (n: number): number => (n < 1) ? 1 : (x * callPowerNTimes(n - 1) )
        return callPowerNTimes (x)
      }

    const showInOut = substitution (showFormula)

    t.is(showInOut (fDouble) (10), 'f(10) = 20')
    t.is(showInOut (fQuadratic) (12), 'f(12) = 144')
    t.is(showInOut (fPower) (4), 'f(4) = 256')
  }
)
