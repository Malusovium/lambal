type Replace = (to: string) => (match: string) => (s: string) => string
const replace: Replace =
  (to) =>
    (match) =>
      (s) =>
        s.replace(new RegExp(match, 'g'), to)

export
{ replace
}
