//The map() method passes each element of the array on which it is invoked to the function
//you specify, and returns an array containing the values returned by that function. For Example:

a = [1,2,3];
//map through the array 'a' and multiply each value by itself.
b = a.map((x) => {
    return x * x;
})
console.log('multiplied array:', b);