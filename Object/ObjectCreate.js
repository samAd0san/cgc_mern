// object.create(); method

/* Syntax: 

    var object_name = Object.create(superClass, {
        key_name: value
    });

*/

var m1 = Object.create({},{
    width: {value: 1, enumerable: true},
    // height: {value: 2, enumerable: false}
});

Object.defineProperty(m1,'height',{
    value: 2,
    enumerable: true
});

console.log(m1);