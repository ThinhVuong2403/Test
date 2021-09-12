let input = [60, 40, 55, 75, 64];

let output = [];

function alternatingSums(arr){
    let sum1 = 0, sum2 = 0;
    for(let i in arr){
        if(i % 2 == 0) sum1 += arr[i];
        else sum2 += arr[i]; 
    }
    output.push(sum1);
    output.push(sum2);
    return '[' + output + ']';
}

console.log(alternatingSums(input));