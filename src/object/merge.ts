type Merge = <T1>(obj1: T1) => <T2>(obj2: T2) => T1 & T2
const merge: Merge = (obj1) => (obj2) => ({...obj2, ...obj1})

export
{ merge
}
