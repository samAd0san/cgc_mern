var student = {
    // id: 118, // to obtain control over the object we declare it in Object.defineProperty(); method
    name: 'Sam'
};

/*  // the value will change
console.log('Before:',student.id); // 118
student.id = 117;
console.log('After:',student.id); // 117
*/

// Since there is no security anyone can modify the object and cause corruption
// So to handle that we use 
/* Object.defineProperty(object_name,key_name, {
    value: (enter_value),
}) */

Object.defineProperty(student,'id',{
    value: 118,
    writable: false,
    enumerable: false // if we made this true the value can be modifiable
});

console.log('Before:',student.id); //118
student.id = 117;
// After the value won't change because of using Object.defineProperty()
// method and writable is false by default if not specified
console.log("After:",student.id); // 117