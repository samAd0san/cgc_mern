// Practise on arrow function

// var sum = function(a,b) => a + b;

// 1st question
var sum = (a,b) => a + b;
// console.log(sum(10,20));

// 2nd question
const mult = num => num * 2;
// console.log(mult(5));

//3rd question
var arr = [1,2,3,4];
var res = arr.map(a => a**2);
// console.log(arr);
// console.log(res);

//4th question
var greet = name => `Hello! ${name}!`;
// console.log(greet('oniichan'));

// 5th question
var string = str => {
    const arr = str.split("");
    arr.reverse();
    // str = arr.join("");
    // return str;
    return arr.join("");
}
console.log(string('toyot'));

// 6th question
var sq = num => num*num;
console.log(sq(5));

// 7th question
var arr1 = ['samad','musayb','muaz'];
var lenOfArr = arr1.map(len => len.length);
console.log(lenOfArr);

// 8th question
var pwr = (base,exponent) => base**exponent;

console.log(pwr(2,5));