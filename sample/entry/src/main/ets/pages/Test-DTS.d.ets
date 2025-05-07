declare struct Test {
  @State
  private message: string;

  build(): void;

  @Builder
  hello(): void;

  setXXX(a: string): this;

  getXXX(): this; 
}

declare struct Hello {}

export { Test };