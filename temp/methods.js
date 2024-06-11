/* The map(), reduce() and filter() are array functions that transform the array according to the 
applied function and return the updated array. They are used to write simple, short and clean codes 
for modifying an array instead of using the loops. */

let arr = [1,2,3,4,5];
// console.log(arr);

const mapp = arr.map((i) => i*10 );
console.log(mapp)