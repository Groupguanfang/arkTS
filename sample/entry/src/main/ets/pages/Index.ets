import { hilog } from '@kit.PerformanceAnalysisKit'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Row() {
        Index() {
          Text("")
        }.onClick(() => {
          hilog.info(0x00, 'test', 'qwq')
        })
      }.align(Alignment.Center)
    }
  }
}
