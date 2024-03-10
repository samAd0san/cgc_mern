/* Write a function that takes a string as input and returns 
the number of vowels (a, e, i, o, u) in the string.*/

function isVowel(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' 
        || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
            count++;
        }
    }
    return count;
}

// console.log(isVowel('This is a test to check the no of vowels present in the string'));

// optimized problem for searching vowels in the string

function isVowelOptimized(str) {

    const regex = /[aeiou]/gi; // g - global, i - case insensitive
    const matches = str.match(regex);
    console.log(matches); // this will show the number of vowels detected
    // 'matches' will return a string of collection of vowels, if it returns the string, i.e truthy
    // 1st condition will satisfy and will return the length of the string(which contain vowels) else will return 0 i.e falsy.
    return matches ? matches.length : 0;
}

const str = "My name is geovani georgeo and every one calls me gerorgO";
const num = 10;

console.log(isVowelOptimized(num.toString()));
console.log(isVowelOptimized(str));