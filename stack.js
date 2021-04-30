/*IMPLEMENTATION OF STACK */


function Stack() {
    this.dataStore = []; //datastructure for the stack
    this.top = 0; //keep position of the top element in the stack
    this.push = push; //remove items from the stack
    this.pop = pop; //add items to the stack
    this.peek = peek; //look at an item in the stack without removing it
    this.length = length;
    this.clear = clear;
}


function push(element) {
    this.dataStore[this.top++] = element;
}


function length() {
    return this.top;
}

let newS = new Stack();
newS.push('Leo');
newS.push('Cynthia');

let removedELement = newS.pop();
let topElement = newS.peek();
let clearedStack = newS.clear();

console.log('lenght of stack:' + newS.length());
console.log('popped element:' + removedELement);
console.log('top Element:' + topElement);
console.log('is it cleared?:'+ newS.clearedStack); //returns undefined because, there is no element present in the stack.

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function clear() {
   return this.top = 0;
}