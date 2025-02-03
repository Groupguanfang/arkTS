import {} from '../entryability/Test'

@Entry
@ComponentV2
export struct Index {
  private message: string = "Hello world"

  build() {
    Column({ space: 100 }) {
      Text(this.message)
        .fontSize(100)
        .fontWeight(FontWeight.Bold)
        .fontColor(Color.White)
    }

    Flex({ direction: FlexDirection.Column })
  }
}
