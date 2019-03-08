type TestAdd = (x: number) => (y: number) => number
const testAdd: TestAdd = (x) => (y) => x + y

export
{ testAdd
}
