function addAsync(a,b) {

    /* Instead of creating a function and passing it as an argument to the promise, and then
    'return' that promise object by storing it into a variable */

    // We directly declare and return the promise

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(a === 0) 
            reject('Invalid Input');
        else
            resolve(a + b);
        },1000);
    });
}

function subAsync(a,b){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            var diff = a - b;
            if(diff < 0)
                reject('Output is in negative');
            else    
                resolve(diff);
        },1000);
    });
}

function multAsync(a,b) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a === 0)
                reject('Invalid Input');
            else
                resolve(a * b);
        },1000);
    });
}

function divAsync(a,b) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a === 0)
                reject('Cant Divide by 0');
            else
                resolve(a / b);
        },1000);
    });
}

// Sequential execution

// Calling sum function but only using resolve
/* uncomment for parallel execution
addAsync(5,10).then(function(addRes){
    console.log('Sum:',addRes);
});

// Calling subtract function and using both resolve and reject
subAsync(40,20)
    .then((subRes) => {
        console.log('Diff:',subRes);
    })
    .catch((error) => {
            console.log(error);
    });

// calling mult and div functions 
multAsync(2,4).then(function(multRes){console.log('Mult:',multRes);});
divAsync(25,5).then(function(divRes){console.log('Div:',divRes);});  */

// Sequential execution

// This also gives callback hell

/*
addAsync(10,5)
    .then(function(addRes){
        console.log(addRes);
        subAsync(addRes,10)
            .then(function(subRes){
                console.log(subRes);
                multAsync(subRes,4)
                    .then(function(multRes){
                        console.log(multRes);
                        divAsync(multRes,4)
                            .then(function(divRes){
                                console.log(divRes);
                            });
                    });
            });
    });
*/

// To Resolve this callback hell issue
// Promise Chaninig
addAsync(10,5)
    .then((addRes) => subAsync(addRes,5))
    .then((subRes) => multAsync(subRes,3))
    .then((multRes) => divAsync(multRes,1))
    .then((divRes) => console.log('Final:',divRes))
    
    // to catch the error
    .catch((err) => console.log(err))