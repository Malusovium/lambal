type Assoc =
  <K extends string>(key: K) =>
    <V>(value: V) =>
      <O>(obj: O) =>
        O & Record<K, V>

const assoc: Assoc =
  (key) =>
    (value) =>
      (obj) =>
        ( <typeof obj & Record<typeof key, typeof value>>
          { ...obj
          , [key]: value
          }
        )

export
{ assoc
}
