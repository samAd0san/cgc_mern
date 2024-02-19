
const m1 = {
    name: 'Mobile',
    width: 13,
    height: 16,

    print: function(a, b, c) {
        console.log(this.width, this.height,a, b, c);
    }
}
const car = {
    name: 'Car',
    width: 10,
    height: 20,
}

// passing the arument 'car' in the place of 'this.width' will give the property of car
m1.print.call(car,1, 2, 3);
m1.print.apply(car,[1,2,3]);


/* call - The call function is used to invoke a function with a specified this value and 
arguments provided individually. */

// const person1 = {
//     name: "Samad",
// }

// const person2 = {
//     name: "Sohaib",
// }

// function greet() {
//     console.log(`Hello ${this.name}!`);
// }

// greet.call(person1);
// greet.call(person2);