/* Constructor functions in JavaScript are used to create objects 
with a predefined structure and behavior by initializing their 
properties and methods. */

// Whenever we create a 'CONSTRUCTOR FUNCTION' we use pascal naming 
// convention for the function name i.e name of the CF is 'Person' not 'person'

function Person(name,age) {
    this.name = name;
    this.age = age;

    this.gender = 'male';

    this.greet = function(){
        // console.log('Hello, i am',name,'and i am',age,'years old');
        console.log('Hello, i am',this.name,'and i am',this.age,'years old');
    }

}

var objName1 = new Person('Sam',20);
var objName2 = new Person('Ady',21);

// console.log(objName1); // this will declare the instance variables in the 
// form of object 

objName1.greet();
objName2.greet();

