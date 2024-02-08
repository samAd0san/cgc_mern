// JS is a loosely typed or dynamically typed language

function add(a,b) {

    if(Array.isArray(a)) a = addArr(a);
    if(Array.isArray(b)) b = addArr(b);

    if(typeof(a) === 'function') a = a();
    if(typeof(b) === 'function') b = b();


    var c = a + b;

    console.log(c);
}

// add(10,20);
// add(10.3,20.2);

// add('sam','Ad');
// add(true,true);
// add(true,false);

// add(null,null);
// add(undefined,undefined);

function fn1() {return 100;}
function fn2() {return 200;}

// add(fn1,fn2);

add([1,3,[1,3,2],2],[5,2,1,6]); // 12 + 14 = 26

// Less Optimised Problem for more optimised check nestedArr.js
function addArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'object') {
            arr[i] = addSubArr(arr[i]);
            sum += arr[i];
        } else {
            sum += arr[i];
        }
    }
    return sum;
}


function addSubArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// console.log(typeof(addArr));

function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;  // base case: end of array
    }

    if (Array.isArray(arr[index])) {
        return sumArray(arr[index]) + sumArray(arr, index + 1); // recursion for nested array
    } else if (typeof arr[index] === 'function') {
        return arr[index]() + sumArray(arr, index + 1); // recursion for function call
    } else {
        return arr[index] + sumArray(arr, index + 1); // recursion for plain addition
    }
}

function add(a, b) {
    var result = sumArray(Array.isArray(a) ? a : [a]) + sumArray(Array.isArray(b) ? b : [b]);
    console.log(result);
}

// Example usage:
add([1, 3, [1, 3, 2], 2], [5, 2, 1, 6]); // Output: 26
add([1, [2, [3, [4, 5]]], [6, 7], 8]); // Output: 36
add(10, 5); // Output: 15
