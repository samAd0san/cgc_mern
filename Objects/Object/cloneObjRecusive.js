// We are Cloning the object as well the nested object using recursion
// Refactored Program for cloning an object with different memory location

var obj1 = {
    name: 'samad',
    rno: 118,
    dept: 'cse',

    address: {
        hNo: '8-1-423/A/305',
        city: 'hyderabad',
        zip: 500008
    }
};

// Cloning the object using recursive function

function clone(object) {
    var res = {};

    for(var key in object) {
        if(typeof object[key] === 'object'){
            res[key] = clone(object[key]);
        }else{
            res[key] = object[key];
        }
    }
    return res;
}

var obj2 = clone(obj1);

/* if we check '===' zip of both the objects without changing 
the value of them it'll give true because they are equal by value type
i.e they are not objects but they are number type. */

obj2.address.zip = 1234;
console.log(obj2.address.zip);

console.log(obj1.address === obj2.address);
console.log(obj1.address.zip === obj2.address.zip);
