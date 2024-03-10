// Given a string and a substring, use the indexOf() method to find the index of the first occurrence of the substring in the string.

function subString(str,subStr) {
    return str.indexOf(subStr);
}

const str = "This is a string to check the substring";
const subStr = "string";
console.log(subString(str,subStr)); // it'll return the first occurance i.e 10th index.