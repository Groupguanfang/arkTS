import UIAbility from '@ohos.app.ability.UIAbility';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import Want from '@ohos.app.ability.Want';
import window from '@ohos.window';
import hilog from '@ohos.hilog';
import {} from '@ohos/hypium'

export default class EntryAbility extends UIAbility { 
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x00, 'EntryAbility', 'onCreate');
  }

  onDestroy() {
    hilog.info(0x00, 'EntryAbility', 'onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('page/Index', (err, data) => {
      if (err) {
        hilog.info(0x00, 'EntryAbility', 'loadContent failed, error: ${err}');
        return;
      }
      hilog.info(0x00, 'EntryAbility', 'loadContent success, data: ${data}');
    })
  }
  
  onWindowStageDestroy(): void {
    hilog.info(0x00, 'EntryAbility', 'onWindowStageDestroy');
  }

  onForeground(): void {
    hilog.info(0x00, 'EntryAbility', 'onForeground');
  }

  onBackground(): void {
    hilog.info(0x00, 'EntryAbility', 'onBackground');
  }
}

