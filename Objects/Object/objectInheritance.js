// Inheritance
// object.create(); method

/* Syntax: 

    var object_name = Object.create(superClass, {
        key_name: value
    });

*/
var absMobile = {
    print: function() {
        console.log('absMobile');
    }
};

var m1 = Object.create(absMobile, {
    width: {value: 5, enumerable: false},
    height: {value: 10, enumerable: false},
    length: {value: 20, enumerable: false},
});

console.log(m1.width);
console.log(m1.height);
console.log(m1.length);

for(var prop in m1) {
    console.log(`${prop} : ${m1[prop]}`);
}


// console.log(m1);

m1.print = function() {
    console.log('m1');
}

// to print its m1 objects own method
// m1.print();

// to print m1's parent method
// Object.getPrototypeOf(m1).print();
// m1.__proto__.print();
// absMobile.print.call(m1); // <-- CHOOSE THIS
// Object.getPrototypeOf(m1).print(); // Accessing the print function of the student object

