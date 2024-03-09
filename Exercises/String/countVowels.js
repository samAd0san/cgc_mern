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

console.log(isVowel('This is a test to check the no of vowels present in the string'));