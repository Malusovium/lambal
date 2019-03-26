type Values = <T>(obj: T) => Array<T[keyof T]>
const values: Values =
  (obj) =>
    Object.values(obj)

export
{ values
}
