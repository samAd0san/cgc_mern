try {
    // fn();
 var fn;
 fn = function () {
    console.log('fn');
}

}catch(err) {
    console.log(err.message);
}finally{
    // console.log('Cleaned Up');
    File.close;
}


function add(a,b){
    if (a <= 0) {

        /* Here we are adding a condition that we do not 
        accept i/p less than 0 in 'a' parameter so we are 
        restricting it by throwing an exception */
        
        throw new Error('Invalid Input');
    }
    return a + b;
}

// on calling this function it'll raise a runtime error
// console.log(add(-5,7));

// Now to handle the runtime error we'll use try-catch
try{
    // var res = add(-5,7); 
    // console.log(res);
}catch(err){
    console.log(err.message); // this will auto gen the issue
}

//e.g 2 -> wkt age cannot be in negative so we throw an exception
// if the user inputs the age in -ve value.

function addAge(age) {
    if(age < 0) throw new Error('Invalid age');

    return age + 1;
}

// addAge(-23);

try{
    var res = addAge(-2);
    console.log(res);
}catch(err){
    console.log(err.message);
}finally{
    console.log('Age Incremented by 1');
}