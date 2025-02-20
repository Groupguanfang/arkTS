import { hilog } from '@kit.PerformanceAnalysisKit'
import EntryAbility from '../entryability/EntryAbility'

@Entry
@Component
export struct Index {
  @State
  private message = 'hello world'

  build() {
    Column() {
      Row() {
        Index() {
          Text("hello world") {
            
          }
        }.onClick(() => {
          hilog.info(0x00, 'test', 'qwq')
        })
      }.align(Alignment.Center)
    }
  }
}
