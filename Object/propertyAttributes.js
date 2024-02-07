/* Property Attributes - property attributes refers the to metadata associated 
with object properties that define various characteristics of those properties,
such as enumerability, writability, and configurability. */

var m1 = Object.create({}, {
    width: {value: 5, writable: false, enumerable: true, configurable: false}
});

/* Writable: false ensures that attempting to change the value of m1.width
will have no effect */
m1.width = 10;
console.log(m1.width);

// with configurable: false we cannot perform any operations with the object
console.log(delete m1.width); // false because configurable is false

// To explain enumeration i will demonstrate with the help of an example

