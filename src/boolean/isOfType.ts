type IsOfSingularType = <T>(typeIn: T & {then?: any}) => boolean

const isOfTypeNull: IsOfSingularType = (typeIn) => typeIn === null

const isOfTypeArray: IsOfSingularType = (typeIn) => Array.isArray(typeIn)

const isOfTypePromise: IsOfSingularType = (typeIn) => typeIn && typeof typeIn.then === 'function'

type TypeOfType =
  'undefined'
  | 'boolean'
  | 'number'
  | 'string'
  | 'object'
  | 'function'
  | 'symbol'

type IsOfTypeOf = (expectedType: TypeOfType) => <T>(actualType: T) => boolean
const isOfTypeOf: IsOfTypeOf = (expectedType) => (actualType) => (typeof actualType === expectedType)

type Types =
  TypeOfType
  | 'null'
  | 'array'
  | 'promise'
type IsOfType = (expectedType: Types) => <T>(actualType: T) => boolean
const isOfType: IsOfType =
  (expectedType) =>
    (actualType) =>
      (expectedType === 'null') ? isOfTypeNull(actualType)
      : (expectedType === 'array') ? isOfTypeArray(actualType)
      : (expectedType === 'promise') ? isOfTypePromise(actualType)
      : isOfTypeOf (expectedType) (actualType)

export
{ isOfType
}
