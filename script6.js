// Factorial of a number using recursion

function fact(n) {

    if (n === 1 || n === 0) return;

    return n * fact(n-1);
}

var res = fact(5);

// console.log(res);

// Find the min element from the array

// function minElement(list){

//     var min = Infinity;
//     for(i = 0; i < list.length; i++){
//         if (list[i] < min) {
//             min = list[i];
//         }
//     }

//     return min;
// }


// console.log(list.length);

// console.log(minElement(list));

// Way 1
var min = Infinity;
var i = 0;
function minElementRec(list) {

    if(i === list.length) return min; 

    if(list[i] < min){
        min = list[i];
    }

    i++;
    return minElementRec(list);
}
var list = [10, 1, -2, -3, 100, 1];
var res = minElementRec(list);
// console.log(res);
 
// Way 2
var minSoFar = Infinity;
var i = 0;
function findMinRec(arr) {
    if (i === arr.length) return;

    if (arr[i] < minSoFar) {
        minSoFar = arr[i];
    }

    i++;
    findMinRec(arr);
}

findMinRec([10, 20, -1, -5, 10, 4]);
// console.log(minSoFar);

// Way 3

function minRec(list, min, i){

    if (i === list.length) return min;

    if(list[i] < min) {
        min = list[i];
    }
    minRec(list, min, i+1);
}

minRec([10, 20, -1, -5, 10, 4],Infinity,0);
console.log(min);