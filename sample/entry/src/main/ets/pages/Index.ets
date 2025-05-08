@Entry
@Component
export struct Index {
  @State
  message = 'hello world'

  world() {
    Hello().hello(this)
  }
}

@Entry
@Component
export struct Hello {
  @Prop
  helloProp: string

  // Reference for a struct (like class)
  hello(test: Index) {
    test.message
  }
}
