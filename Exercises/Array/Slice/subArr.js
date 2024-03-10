/* Given an array, extract a portion of the array and return it as a new array using the slice()
method. Write a function that takes an array, start index, and end index, and returns the subarray
between the start and end indices.*/

/* The slice() method extracts elements from the array arr starting from index 1 (inclusive) up to,
but not including, index 4. */
function customSlice(arr,start,end){

    if(start < 0 || start > arr.length || end < start || end > arr.length){
        throw new Error('Index out of bound');
    }

    return arr.slice(start,end);
}

const arr = [1,2,3,4,5];
console.log(arr.slice(1,4));
console.log(customSlice(arr,1,4));