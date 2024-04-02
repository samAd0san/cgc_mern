// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortByKey(arr,key){
    arr.sort((a,b) => a[key] - b[key]);
    return arr;
}

const data = [
    {id : 1, name : 'samuel', age : 20},
    {id : 2, name : 'samkan', age : 35},
    {id : 3, name : 'hahoo', age : 30},
];

const result = sortByKey(data,'age');
// console.log(result);


// palindrome

function isPalindrome(str){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('malayalam'));