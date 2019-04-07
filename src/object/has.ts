type Has = (key: string) => <T>(obj: T & any) => boolean
const has: Has = (key) => (obj) => typeof obj[key] !== 'undefined'

export
{ has
}
