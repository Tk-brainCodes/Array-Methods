function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.length = length;
    this.pop = pop;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function length() {
    return this.top;
}


function pop() {
    return this.dataStore[--this.top];
}


//base covenvertion function
function mulBase(num, base) {
    let newStack = new Stack();

    do {
        newStack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = "";
    while (newStack.length() > 0) {
        converted += newStack.pop();
    }
    return converted;
}

let num = 32;
let base = 2;
let newNum = mulBase(num, base);
console.log(num,  "converted to base", base, "is", newNum);
