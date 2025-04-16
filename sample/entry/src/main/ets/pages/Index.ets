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
          }.onClick(() => {
            console.log('click')
          })
        }, (_, i) => i.toString())
      }
    }
  }

  @Builder
  testBuilder() {
    Column() {
      Text("testBuilder") {}
    }
  }
}

@Entry
@Component
export struct Hello {
  build() {
    Column() {
      Text("hello")
     
    }
    
    .width('100%')
  }
}
