/* Synchronous code is the code which gets executed simultaneously, one line at a time, Each 
operation must be completed before the next one to execute */

function add(a,b) {

    ++a;
    ++b;

    var c = a + b;
    return c;
}

// console.log(add(2,3)); // all the lines are executed one by one there is not delay

function print() {
    console.log('First');
    console.log('Second');
    console.log('Third');
}

print(); // this is a synchronous code 