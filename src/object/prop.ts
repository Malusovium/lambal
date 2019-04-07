import { IsKeyOf } from '../types'

type Prop = <K extends string | number>(key: K) => <T>(obj: T) => T[IsKeyOf<K, T>]
const prop: Prop =
  (key) =>
    (obj) =>
      obj[<IsKeyOf<typeof key, typeof obj>>key]

export
{ prop
}
