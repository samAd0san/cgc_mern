function f1() {return 100;}
function f2() {return 200;}

// add(f1,f2);


/* Refactor problem a function which accepts n number of nested
array in the add function */ 

function add(a,b) {
    // if the argument is array then call 'addArr' function
    if(Array.isArray(a)) a = addArr(a);
    if(Array.isArray(b)) b = addArr(b);

    /* if the argument is function then call the function 
    which is specified in the parameter */
    if(typeof(a) == 'function') a = a();
    if(typeof(b) == 'function') b = b();

    console.log(a + b);
}

function addArr(arr) { // This is a function for specificly array
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){ // this is for nested array
            arr[i] = addArr(arr[i]);
            sum += arr[i];
        }else{ // this is for plain addition
            sum += arr[i];
        }
    }
    return sum;
}

// add([1, [2, [3, [4, 5]]]], [[6, 7], 8]);
add([1, 3, [1, 3, 2], 2], [5, 2, 1, 6]);
// add(10,[2,6,1,[7,3,1],9]);
