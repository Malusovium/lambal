import test from 'ava'

import { compose } from './compose'

test
( 'compose is a function'
, (t) => {
    const composeType = typeof compose
    t.is(composeType, 'function')
  }
)

test
( 'compose returns a function'
, (t) => {
    const composeReturnType = typeof compose ( () => {} )
    t.is(composeReturnType, 'function')
  }
)

test
( 'compose returns returns a function'
, (t) => {
    const composeReturnReturnType = typeof compose ( (b: string) => null ) ( (a: number) => '' )
    t.is(composeReturnReturnType, 'function')
  }
)

test
( 'compose properly composes 2 functions'
, (t) => {
    const wordsToSentences = (words: string[]) => words.join(' ') + '.'
    const capitalize = (str: string) => {
      const [ head, ...tail ] = str.split('')
      return [ head.toUpperCase(), ...tail ].join('')
    }
    const makeProperSentence = compose (capitalize) (wordsToSentences)

    t.is(wordsToSentences (['hi', 'organism']), 'hi organism.')
    t.is(capitalize ('hi'), 'Hi')
    t.is(makeProperSentence (['hi', 'organism']), 'Hi organism.')
  }
)
