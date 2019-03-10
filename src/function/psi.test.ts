import test from 'ava'

import { psi } from './psi'

test
( 'psi is a function'
, (t) => {
    const psiType = typeof psi
    t.is(psiType, 'function')
  }
)

test
( `psi return's a function`
, (t) => {
    const psiReturnType = typeof psi ((b1: null) => (b2: null) => null)
    t.is(psiReturnType, 'function')
  }
)

test
( `psi return's return's a function`
, (t) => {
    const psiReturnReturnType =
      typeof psi
             ((b1: null) => (b2: null) => null)
             ((a: null) => null)
    t.is(psiReturnReturnType, 'function')
  }
)

test
( `psi return's return's return's a function`
, (t) => {
    const psiReturnReturnReturnType =
      typeof psi
             ((b1: null) => (b2: null) => null)
             ((a:null) => null)
             (null)
    t.is(psiReturnReturnReturnType, 'function')
  }
)

test
( 'psi works properly'
, (t) => {
    const add = (n1: number) => (n2: number) => n1 + n2
    const substract = (n1: number) => (n2: number) => n1 - n2
    const multiply = (n1: number) => (n2: number) => n1 * n2
    const sortofAtoi = (nStr: string) => {
      const numberTable = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
      const possibleNumberInStrArray = nStr.split('').filter( (possibleNumber: string) => numberTable.includes(possibleNumber))
      return possibleNumberInStrArray.reduce( (acc: number, curr: string) => (acc * 10) + numberTable.findIndex( (curr2: string) => curr === curr2), 0)
    }
    const addStr =
      psi (add)
          (sortofAtoi)
    const substractStr =
      psi (substract)
          (sortofAtoi)
    const multiplyStr =
      psi (multiply)
          (sortofAtoi)

    t.is(addStr ('10') ('45'), 55)
    t.is(substractStr ('100') ('42'), 58)
    t.is(multiplyStr ('10') ('23'), 230)
  }
)
