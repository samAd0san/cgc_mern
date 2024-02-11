/* filter() - This method filters an array with values that passes a test, then creates a test
then creates a new array */

var arr = [1,2,3,4];

var res = arr.filter(a => a % 2 === 0);
console.log(arr);
console.log(res);