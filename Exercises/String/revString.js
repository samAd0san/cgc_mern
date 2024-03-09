// Write a function that takes a string as input and returns the string reversed.

function revString(str) {
   let revStr = '';
   for(let i = str.length-1; i >= 0; i--){
    revStr += str.charAt(i);
   }
   return revStr;
}

var str = 'roronoa';
// console.log(revString(str));

// console.log(str.charAt(0));
// console.log(str.length/2);

// This is more optimized approach to reverse a string 
function revStringOptimized(str) {
    return str.split('').reverse().join('');
}

console.log(revStringOptimized('samuel'));