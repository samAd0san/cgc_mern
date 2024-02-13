
function addAsync(a,b,callback) {
    setTimeout(function(){
        var res = a + b;
        callback(res);
    },1000);
}

function subAsync(a,b,callback) {
    setTimeout(() => {callback(a - b)},1000);
}

function multSync(a,b,callback) {
    setTimeout(()=> {callback(a * b);},1000);
}

function divSync (a,b,callback) {
    setTimeout(() => {callback(a / b);},1000);
}


// parallel execution of Asynchronous functions
addAsync(5,10,(res) => console.log(res));
subAsync(10,20,(res) => console.log(res));
multSync(5,2,(res) => {console.log(res)});
divSync(100,5,(res) => {console.log(res)});

console.log();

// Sequential execution of Asynchrous functions

// This code snippet is known as callback hell, This code is even not efficient in readability

/* Callback hell refers to the situation in asynchronous programming where code becomes difficult
to read and maintain due to excessive nesting of callback functions.*/

addAsync(5,10,(addRes) => {
    console.log('Add:',addRes);
    subAsync(10,20,(subRes) =>{
        console.log('Sub:',subRes);
        multSync(5,2,(multRes) => {
            console.log('Mult:',multRes);
            divSync(100,5,(divRes) =>{
                console.log('Div:',divRes);
            })
        });
    });
});

// To resolve this problem (callBack hell) we use PROMISES, ASYNC/WAIT