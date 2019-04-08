# Lambal

A pragmatic utility library to spice up your code.

With a focus on functional style code, without staring in the deep abyss of category theory.

## Install
```ts
npm i -S lambal
```

## Usage

### Recommended with full usage!
```ts
import
{ F
, B
, S
, N
, A
, O
} from 'lambal'

// Sorted by main funcionality
// F -> Function
// B -> Boolean
// S -> String
// N -> Number
// A -> Array
// O -> Object

// e.g.
const add10 = N.add(10)
const add20 = F.compose (add10) (add10)

```

### When you need only need a couple of functions
```ts
import
{ add
, multiply
} from 'lambal/number'
import
{ compose
, identity
} from 'lambal/function'

```

