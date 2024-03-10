/* Given an array, remove a specific range of elements and replace them with new elements using the splice() method.
Write a function that takes an array, start index, delete count, and optional elements to insert. */

function customSplice(arr, start, deleteCount, ...elemetsToInsert) {
    // Check if the start index is valid
    if(start < 0 || start > arr.length) {
        throw new Error('Start Index is out of bound');
    }

    // If deleteCount is -ve convert it to 0
    if(deleteCount < 0) {
        deleteCount = 0;
    }

    // remove delete count elements from the start index and add the given elements
    const removedElements = arr.splice(start,deleteCount, ...elemetsToInsert);

    return removedElements;
}

const arr = [1,2,3,4,5];
const removed = customSplice(arr,1,2,'a','b','c');

console.log(`Modified array: ${arr}`);
console.log(`Removed elements: ${removed}`);