// Whether the String spells the same backwards

function isPalindrom(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reverseStr = cleanedStr.split('').reverse().join('');
    return cleanedStr == reverseStr;
}

console.log(isPalindrom("A man, a plan, a canal: Panama"));

/**
 * syntax
 * replace(pattern, replacement) // The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
 * The reverse() method of Array instances reverses an array
 */