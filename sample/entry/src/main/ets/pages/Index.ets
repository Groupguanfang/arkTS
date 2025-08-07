import { MyCustomComponent } from 'sample-library'

class MyLazyDataSource implements IDataSource {
  getData(index: number): number {
    return index + 1;
  }

  totalCount(): number {
    return 100;
  }

  registerDataChangeListener(listener: DataChangeListener): void {
    // Implement data change listener registration if needed
  }

  unregisterDataChangeListener(listener: DataChangeListener): void {
    // Implement data change listener unregistration if needed
  }
}

@Entry
@Component
struct Index {
  @State
  message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)

        MyCustomComponent()
      }.width('100%')
        .height(200)
        .accessibilityDescription('Test')
        .align(Alignment.Center)

      ForEach([1, 2, 3, 4], (item) => {
        Column() {
          Row() {
            Text(item.toString())
          }.margin(10)
          .height(20)
        }
      })

      LazyForEach(new MyLazyDataSource(), (item) => {
        Column() {
          Row() {
            Text(item.toString())
          }
        }
      })
    }.height('100%')
  }
}
