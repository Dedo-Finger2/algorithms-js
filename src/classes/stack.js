import { EmptyStackError } from "../errors/empty-stack.js";
import { MethodNotImplementedError } from "../errors/method-not-implemented.js";

export class Stack {
  #value;

  constructor() {
    this.#value = [];
  }
  
  push(value) {
    this.#value.push(value);
  }

  pop() {
    if (this.#value.length === 0) throw new EmptyStackError();
    
    const removedValue = this.#value[this.#value.length - 1];

    this.#value = this.#value.slice(0, this.#value.length - 1);

    return removedValue;
  }
  
  empty() {
    return this.#value.length === 0;
  }
  
  peek() {
    if (this.#value.length === 0) throw new EmptyStackError();

    return this.#value[this.#value.length - 1];
  }

  // TODO
  search(value) {
    this.#value.map((valueIn) => {
      console.log(value, valueIn);
      if (value == valueIn) return this.#value.indexOf(value);
    });
  }

  get value() {
    return this.#value;
  }
}