type Capitalize = (s: string) => string
const capitalize: Capitalize =
  (s) => {
    if (s === '') {
      return ''
    } else {
      const Capitalized = s.slice(0, 1).toUpperCase()
      const rest = s.slice(1)
      const capitalizedString = `${Capitalized}${rest}`
      return capitalizedString
    }
  }

export
{ capitalize
}
