// What if the i/p in call back function is incorrect
// In callback(err,res); The first param should define error, and the second parameter gives o/p or result

function addAsync(a,b,cb) {
    
    setTimeout(function(){
        if(a === 0) console.log('Invalid Input');
        else{
            var res = a + b;
            cb(null,res);

            console.log('Calculation Completed');
        }
    },1000);
}

// rather than creating a callback function, we can define it in the paramter itself by arrow function

// addAsync(23,3,(err,res) => {
//     if(err) console.log(err);
//     else console.log(res);
// });

function multSync(a,b,callback) {

    setTimeout(() => {
         var res = a * b;
        if(res < 0 ) console.log('Invalid Input');
        else callback(NaN,res);
    }, 1000);
    console.log('Execution Completed');
}

multSync(2,5,(err,res) => {
    if(err) console.log(err);
    else console.log(res);
});

// Or we can explicitly create a call back function then pass it as an
var callback = (err,res) => {
    if(err) console.log(err);
    else console.log(res);
}

multSync(3,-2,callback);