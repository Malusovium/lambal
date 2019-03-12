import equal from 'fast-deep-equal'

type Equals = <A> (a: A) => <B>(b: A | B) => boolean
const equals: Equals = (a) => (b) => equal(a, b)

export
{ equals
}
