/*Asynchronous code allows multiple operations to be executed with out blocking the main thread.
Since, we know that JavaScript is single threaded*/

function addASync(a,b) {
    console.log('Execution Started...');
    // This function is used to schedule the the execution of a function after a specified delay
    setTimeout(function(){
        // As we can see there is delay of 2sec in this function.
        // while the delay the main thread keeps on its execution rather than waiting for the time to end
        console.log('Calculation Started...');
        ++a;
        ++b;

        var c = a + b;
        // when the delay occurs it'll not return the return value rather skip it 
        return c;
        console.log('Calculatoin ended.');
    },2000);
    console.log('Execution ended.');
}

// var res = addASync(5,3,callback); 
// console.log(res);  // In the output it is giving 'undefined'


/* To Retrieve the return value of the function we have to create a call back function */
function callback(result) {
    console.log(result);
}

function sumAsync(a, b, cb){
    setTimeout(function(){
        ++a;
        ++b;

        var c = a + b;

        cb(c); // we are passing the return value to the function to retrieve the value
    },2000);
}

sumAsync(2,3,callback);
// console.log(output);