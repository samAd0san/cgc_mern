// Write a function that takes a string containing multiple words and capitalizes the first letter of each word.

function upperCase(str) {
const list = str.split(" ");
    for(let i = 0; i < list.length; i++) {
        // The slice() method of String values extracts a section of this string and returns it as a new string,
        // without modifying the original string.
        list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1); // slice(startingIndex, endingIndex(optional))
    }

    str = list.join(" ");
    return str;
}

function upperCaseOptimized(str) {
    // \b matches a word boundary, ensuring that only the first letter of each word is matched.
    // \w matches any word character (letter, digit, or underscore).
    // (char) is an arrow function that is passed as a callback to the replace() method.
    return str.replace(/\b\w/g, (char) => {
        return char.toUpperCase();
    });
}

const str = "convert to upper case";
const str1 = "this is a sample prototype to convert each character of the string to upper case";

console.log(upperCase(str));
console.log(upperCaseOptimized(str1));