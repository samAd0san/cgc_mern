// Return the no of vowels present in the string

function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels('aeiou')); // Output: 5
console.log(countVowels('Hello World')); // Output: 3