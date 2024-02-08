// strict and floppy
// "stricter rules" catches common errors, and promotes better coding practices.
// "sloppy mode" refers to the default mode where less strict rules are enforced

'use strict';

var m1 = Object.create({},{
    name: {value:'Sam',enumerable: true},
    rno: {value: 243, enumerable: true}
});

//  m1.name = 'oni'; // in strict mode it'll give exception because writable is false

// console.log(m1);

function sum(a,a) {
    console.log(a + a);
}

//  sum(10,20); // will give exception since strict mode is on





