// Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

function findMinMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min,max];
}

// console.log(findMinMax([10,20,30,40,50]));

// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

function uniqueArr(arr){
    
    return Array.from(new Set(arr));
}

// console.log(uniqueArr([1,1,4,6,2,7,2,5,7,8,1,3,6]));

function fact(n) {
    if(n === 0 || n === 1)
    return 1;

    return n*fact(n-1);
}

// console.log(fact(5));

// Write a function that determines if a given number is prime or not. 

function isPrime(num){
    if(num === 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function testPrime(n){
    for(let i = 1; i <= n; i++){
        console.log(i,isPrime(i));
    }
}

// console.log(isPrime(10));
// testPrime(30)

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function toTitleCase(str){
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
}

console.log(toTitleCase('this is title case'));

// Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 

const flattenArray = (nestedArray) => { 

    return nestedArray.flat(Infinity); 
  
}; 

const arr = [1,2,3,[3,4,[5]]];
// console.log(flattenArray(arr));

const arrSum = (arr) => {
    let result = 0;
    for(let i = 0; i < arr.length ; i++){
        result += arr[i];
    }
    return result;
}

console.log(arrSum([1,2,3,4,5]));
console.log(arrSum([5,5]));