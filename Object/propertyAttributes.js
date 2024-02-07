/* Property Attributes - property attributes refers the to metadata associated 
with object properties that define various characteristics of those properties,
such as enumerability, writability, and configurability. */

var m1 = Object.create({}, {
    width: {value: 5, writable: false, enumerable: true, configurable: false}
});

/* 1. Writable: false ensures that attempting to change the value of m1.width
will have no effect */
m1.width = 10;
console.log(m1.width);

// 2. With configurable: false we cannot perform any operations with the object
console.log(delete m1.width); // false because configurable is false

// 3. To explain enumeration i will demonstrate with the help of an example

var student = {
    id: 118,
    name: 'Sam'
};

// Now by using Object.DefineProperty(); i am adding new keyValue pair

Object.defineProperty(student,'Dept',{
    enumerable: false, // On making enumerable false we cannot add a new keyValue pair to the object 
    writable: false, // making writable false will not allow me to modify the value
    value: 'IT'
});

// student.Dept = 'CSE'; // This value cannot be modified because writable is false

console.log(student);
