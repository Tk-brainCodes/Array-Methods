function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.length = length;
    this.push = push;
    this.pop = pop;
}

function length() {
    return this.top;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

Palindrome = (word) => {
    let newStack = new Stack();    console.log(wordOne, "is a palindrome");

    //loop through the word.
    //add every character to the stack.
    for (let i = 0; i < word.length; i++) {
        newStack.push(word[i]);
    }

    let reversedWord = "";
    while (newStack.length() > 0) {
        reversedWord += newStack.pop();
    }
    if (word == reversedWord) {
        return true;
    } else {
        return false;
    }
}

let wordOne = 'hello';
let word = 'dad';
if (Palindrome(wordOne)) {
    console.log(wordOne, "is a palindrome");
} else if (Palindrome(word)) {
    console.log(word, "is a palindrome");
} else {
    console.log(word, "is not a palindrome");
}




