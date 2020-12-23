

let grades = [[89, 77, 78], [76, 82, 81], [91,94,89]];

let total = 0;
let average = 0.0;
for (let row = 0; row < grades.length; ++row){
    for(let cols = 0; grades[row].length; ++cols){
        total += grades[row][cols]
    }
}

average = total / grades[row].length;
console.log('Student' +parseInt(row + 1) + "average:" +average.toFixed(2));
total = 0;
average = 0.0;