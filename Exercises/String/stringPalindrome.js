/* Write a function that takes a string as input and returns true if the string is a palindrome 
and false otherwise. */

// method 1 - using while loop
function strPalindrom(str) {
    let n = str.length;
    let i = 0;
    while(i < n/2) {
        if(str.charAt(i) !== str.charAt(n - 1 - i)){
            return false;
        }
        i++;
    }
    return true;
}

// method 2 - using for loop
const isPalindrome = (str) => {
    let n = str.length;
    for(let i = 0; i < n/2; i++) {
        if(str.charAt(i) !== str.charAt(n - 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(strPalindrom('response'));
console.log(strPalindrom('bananab'));
console.log();
console.log(isPalindrome('response'));
console.log(isPalindrome('bananab'));

