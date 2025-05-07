@Entry
@Component
export struct Index {
  @State
  message = 'hello world'

  world() {
  }
}

@Entry
@Component
export struct Hello {
  // Reference for a struct (like class)
  hello(test: Index) {
    test.message
  }
}
