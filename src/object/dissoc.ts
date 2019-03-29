import { IsKeyOf } from './../types'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type Dissoc =
  <K extends string>(key: K) =>
    <T extends object>(obj: T) =>
     Omit<T, IsKeyOf<K, T>>
const dissoc: Dissoc =
  (key) =>
    (obj) => {
      let copyObj = obj
      delete copyObj[<IsKeyOf<typeof key, typeof obj>>key]

      return copyObj
    }

export
{ dissoc
}
