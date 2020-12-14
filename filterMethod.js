//The filter() method returns an array containing a subset of the elements of the array
//on which it is invoked.

let a = [5,4,3,2,1];

//go through the array and return numbers that are greater than 3.
let b = a.filter( (x) => {
    return x > 3;
})
console.log(b);

//or 

//Divide the index of the array by 2
let c = a.filter((x,i) => {
    return i % 2 == 0;
})

console.log(c)