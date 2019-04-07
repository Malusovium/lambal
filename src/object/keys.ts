const toNumber = (str: string) => Number.parseFloat(str)

type Keys = <T>(obj: T) => Array<keyof T>
const keys: Keys =
  (obj) =>
    Object
      .keys(obj)
      .map
       ( (key: string) => {
           const keyNumber = toNumber(key)
            return Number.isNaN(keyNumber)
              ? key
              : keyNumber
         }
       ) as Array<keyof typeof obj>

export
{ keys
}
