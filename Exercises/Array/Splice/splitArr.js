/* Given an array, split it into two parts at a specific index using the splice() method.
Write a function that takes an array and an index, and returns an array containing two subarrays split at the specified index. */

function customSplitArr(arr,index) {
    // checking if the index of array is valid or not
    if(index < 0 || index > arr.length) {
        throw new Error('Index is out of bound');
    }

    // Syntax - splice(start, deleteCount, item1, item2, /* …, */ itemN)
    const firstPart = arr.splice(0,index); // shows the deleted elements
    const secondPart = arr // shows the remaining element in the array

    return [firstPart,secondPart]
}

const arr = [10,20,30,40,50];
const res = customSplitArr(arr,2);
console.log(res);