import { Index } from './Index'
import { Test } from './Test-DTS'

@Entry
@Component
export struct Second {
  aboutToAppear() {
  }

  build() {
    Test() {
      Text("Hello world")
        .width(100)
        .height(200)
    }
      .setXXX('')
      .getXXX()
  }

  @Builder
  hello() {
    Column() {

    }
  }
}