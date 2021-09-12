let array = [2,3,-5,-2,4];
let mul = 0;
let max = 0

function adjacentElementsProduct(inputArray) {
    for(let i = 1; i < inputArray.length; i++) {
        mul = inputArray[i-1] * inputArray[i];
        if (max < mul) {
            max = mul;
        }
    }

    return max;
}

console.log(adjacentElementsProduct(array));
