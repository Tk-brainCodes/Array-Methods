let data = [1,2,3,4,5,6];
let sum = 0;

data.forEach(function(value){
     sum += value;
});

console.log(sum);

data.forEach(function(v,i,a){
    a[i] = v + 1;
})

console.log(data);