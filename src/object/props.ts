import { IsKeyOf } from './../types'

type Props = <K extends string[]>(key: K) => <T>(obj: T) => T[IsKeyOf<K, T>]
const props: Props =
  (keys) =>
    (obj) =>
      keys
        .reduce
        ( (acc: any, curr: any) =>
          obj[<IsKeyOf<typeof curr, typeof obj>>curr] === undefined
            ? acc
            : { ...acc, [curr]: obj[<IsKeyOf<typeof curr, typeof obj>>curr]
              }
        , <any>{}
        ) as typeof obj[IsKeyOf<typeof keys, typeof obj>]

export
{ props
}
