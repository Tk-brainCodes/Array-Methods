//The reduce() and reduceRight() methods combines elements in an array and returns a single value.

let array = [1,2,3,4,5];

//sum
let sum = array.reduce((x,y) => {
    return x + y;
}, 0);

console.log(sum);

//multiplication
let product = array.reduce((x,y) => {
    return x * y;
}, 1);

console.log(product);


//max (largest value)
let max = array.reduce((x,y) => {
    return (x > y) ? x:y ;
}, 0);

console.log(max);

//reduceRight(); works from right to left while reduce(); works from left to right
let  a = [2,3,4];

let answr = a.reduceRight((accumulator, value) => {
    return (Math.pow(value,accumulator));
})

//returns exponential.
console.log(answr);