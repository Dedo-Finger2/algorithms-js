import { Stack } from "../classes/stack.js";

const stack = new Stack();

// console.log(stack.empty());

stack.push("Minecraft");
stack.push("Skyrim");
stack.push("DOOM");
stack.push("Borderlands");
stack.push("FFVII");

// const finalFantasy = stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.empty());

console.log(stack.value);

// console.log(finalFantasy);

console.log(stack.peek());

console.log(stack.search("Borderlands"));
