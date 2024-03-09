/* Given a string containing words separated by spaces, write a function that
splits the string into an array of words and then joins them together with a different separator
(e.g., comma).*/

function splitJoin(str) {
    return str.split(' ').join(',');
}

console.log(splitJoin('H E L L O'));