export class EmptyStackError extends Error {
  constructor(message = "Cannot pop an empty stack.") {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}