import { hilog } from '@kit.PerformanceAnalysisKit'

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

        Button() {
          Text("Click me")
        }.onClick(() => {
          this.message = 'clicked!'
        })
      }
    }
  }
}
