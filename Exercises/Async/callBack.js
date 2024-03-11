/* Write a function addNumbers(num1, num2, callback) that takes two numbers as input and a callback function.
The callback function should accept the sum of the two numbers as its argument and log it to the console. */

function sumAsync(a,b,callback){
    setTimeout(function(){
        const result = a + b;
        callback(result);
    },1000);
}

function callBack(result){
    console.log(result);
}

sumAsync(2,3,callBack);

// PART - 1
// Example of callback function

// we have to execute the function in order
function hello(callBack) {
    setTimeout(function(){
        console.log('Hello');
        callBack();
    },1000)
}

function bye() {
        console.log('Byee!');
}

hello(bye);