/* What if we want to store any variable permanently, we use Serialization */

/* Serialization in JavaScript refers to the process of converting an object into a format that 
can be easily stored (such as JSON) or transmitted over a network (such as XML). */

/* This JSON or XML file can be sent to any other programming language, since it supports 
JSON or XML file. */

var m1 = {
    width : 10,
    height : 20,
}

// Converting object to JSON file
// To identify JSON file, the key will be in double quotes
var serializedObj = JSON.stringify(m1);
console.log((serializedObj));

// Converting JSON file to object
var deSerializedObj = JSON.parse(serializedObj);
console.log(deSerializedObj);
