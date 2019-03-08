import test from 'ava'

import { identity } from './identity'

test
( 'identity is a function'
, (t) => {
    const identityType = typeof identity
    t.is(identityType, 'function')
  }
)

test
( 'identity correctly returns it input'
, (t) => {
    const outputUndefined = identity(undefined)
    const outputNull = identity(null)
    const outputBoolean = identity(false)
    const outputNumber = identity(10)
    const outputString = identity("this is a string")
    const outputArray = identity(["a", "b", "c"])
    const outputObject = identity({ a: 1, b: 2, c: 3})
    const fnIn = () => {}
    const outputFunction = identity(fnIn)
    const promiseIn = Promise.resolve(20)
    const outputPromise = identity(promiseIn)

    t.is(outputUndefined, undefined)
    t.is(outputNull, null)
    t.is(outputBoolean, false)
    t.is(outputNumber, 10)
    t.is(outputString, "this is a string")
    t.deepEqual(outputArray, ["a", "b", "c"])
    t.deepEqual(outputObject, { a: 1, b: 2, c: 3})
    t.is(outputFunction, fnIn)
    t.is(outputPromise, promiseIn)
  }
)
