type IsKeyOf<K, T> = K extends keyof T ? K : never

export
{ IsKeyOf
}
