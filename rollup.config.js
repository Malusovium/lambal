const typescript = require('rollup-plugin-typescript2')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')

const booleanIn = 'boolean/index'
const stringIn = 'string/index'
const numberIn = 'number/index'
const arrayIn = 'array/index'
const objectIn = 'object/index'
const functionIn = 'function/index'

const makeConfig =
  (filePath) => (
    { input: `src/${filePath}.ts`
    , plugins:
      [ typescript
        ( { target: 'es6'
          }
        )
      , nodeResolve
        ( { jsnext: true
          , extensions: [ '.ts', '.js' ]
          }
        )
      , commonjs()
      ]
    , output:
      [ { file: `dist/${filePath}.mjs`
        , format: 'esm'
        }
      , { file: `dist/${filePath}.js`
        , format: 'cjs'
        }
      ]
    }
  )

const files =
  [ 'index'
  , 'boolean/index'
  , 'string/index'
  , 'number/index'
  , 'array/index'
  , 'object/index'
  , 'function/index'
  ]

const configs = files.map(makeConfig)

module.exports = configs
