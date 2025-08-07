export function add(a: number, b: number) {
  return a + b;
}

@Component
export struct MyCustomComponent {
  build() {
    Column() {
      Text("Hello, MyCustomComponent")
    }
  }
}
