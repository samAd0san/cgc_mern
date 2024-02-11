/* reduce() - It reduces a function into a single value */

var arr = [1,2,3,4];

// This arr method will print the sum of elements of the arr

// In 'acc' i.e accumulator we store the resultant value of the curr.
// curr is like a pointer it'll iterate through '0' index to 'n-1' and store the value in acc

const sum = arr.reduce((acc,curr) => acc + curr);

console.log(sum);