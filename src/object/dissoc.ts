type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type IsKeyOf<K, T> = K extends keyof T ? K : never
type Dissoc =
  <K>(key: K) =>
    <T>(obj: T) =>
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
