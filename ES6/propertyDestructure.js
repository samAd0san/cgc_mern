// Property Destructure - It is used to extract values from the existing object properties
// into a seperate variable

var student = {
    name: 'Sam',
    rno: 118,

    fn: function() {
        console.log('fn');
    },

};

const {name,rno} = student

console.log(name,rno);

// Array Destructure - It is used to extract elements from arrays and assign them to variables
// in a single expression

const arr = [1,2,3,4];

const [first,second] = arr;
const [one,two] = arr;
const [a,b] = arr;

console.log(first,second);
console.log(one,two);
console.log(a,b);