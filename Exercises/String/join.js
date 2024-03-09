/*Given an array of strings, use the join() method to concatenate 
all the strings into one single string, separated by a specific delimiter.*/

function mergeStr(arrOfStr,delimiter) {
    return arrOfStr.join(delimiter);
}

const list = ['This','is','the','concatination','of','string'];
console.log(mergeStr(list,' '));