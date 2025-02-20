@Entry
@Component
export struct Index {
  @State
  private message = 'hello world'

  build() {
    Column() {
      Row() {
        Text(this.message)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)

        ForEach([1, 2, 3], () => {
          Row() {
            Text("item")
          }
        }, (_, i) => i.toString())
      }
    }
  }
}
