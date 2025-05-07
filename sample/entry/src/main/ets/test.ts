export declare var Hello: HelloConstructor

interface HelloConstructor {
  (): Hello
  new (): Hello
}

class HelloMock {
  c: bigint
}

interface Hello extends HelloMock {
  a: string
  b: number
}
