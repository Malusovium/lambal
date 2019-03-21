import test from 'ava'

import { replace } from './replace'

test
( 'replace is a function'
, (t) => {
    const replaceType = typeof replace
    t.is(replaceType, 'function')
  }
)

test
( 'replace returns a function'
, (t) => {
    const replaceReturnType = typeof replace ('')
    t.is(replaceReturnType, 'function')
  }
)

test
( 'replace returns returns a function'
, (t) => {
    const replaceReturnReturnType = typeof replace ('') ('')
    t.is(replaceReturnReturnType, 'function')
  }
)

test
( 'replace works properly'
, (t) => {
    t.is(replace ('foo') ('bar') (''), '')
    t.is(replace ('foo') ('bar') ('bar'), 'foo')
    t.is(replace ('foo') ('bar') ('bar bar ba b bar'), 'foo foo ba b foo')
  }
)
