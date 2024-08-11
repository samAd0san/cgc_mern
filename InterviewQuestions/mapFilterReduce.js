/**
* filter creates a new array with elements that pass a condition, whereas map transforms every element of the array regardless of the condition.
 */

// 1. map() - map function is used for creating a new array from the existing one by applying 
// a function to each element of the first array

const nums = [1, 2, 3, 4, 5];

// Array.map((num, i, arr) => {...})

/**
 * Polyfills are pieces of code that add new features to older web browsers so they can use modern JavaScript functions.
 */
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

nums.myMap((num, i, arr) => {
    console.log(num); // 1 2 3 4 5
    console.log(num * 2) // 2 4 6 8 10
});

// 2. filter() - filter takes each element in an array and applies the conditional statement
// against it, and the elements which satisfies the conditions are returned.

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
}

nums.myFilter((num, i, arr) => {
    if (num >= 3) {
        console.log(num); // 3 4 5
    }
});

// 3. reduce() - reduce method reduces the array of values down to one value
// acc - It is the result of the previous computation
// curr - It is the current element of the array

Array.prototype.myReduce = function (cb, initailValue) {
    var accumulator = initailValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

const sum = nums.myReduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 15