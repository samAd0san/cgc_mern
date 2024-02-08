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
    width: {value: 5, enumerable: true}
});

// console.log(m1);

m1.print = function() {
    console.log('m1');
}

// to print its m1 objects own method
m1.print();

// to print m1's parent method
Object.getPrototypeOf(m1).print();
m1.__proto__.print();
absMobile.print.call(m1); // <-- CHOOSE THIS
Object.getPrototypeOf(m1).print(); // Accessing the print function of the student object

