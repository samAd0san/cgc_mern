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
testPrime(30)