type Drop = (n: number) => <T>(a: T[]) => T[]
const drop: Drop =
  (n) =>
    (a) =>
      (n >= 0)
        ? a.slice(n)
        : a.slice(0, a.length + n)

export
{ drop
}
