// We can define or modify multiple properties of an object

var m1 = {};
Object.defineProperties(m1,{
    name: {value: 'sam',enumerable:true},
    rno: {value: 123, configurable:true,enumerable:true},

    print: {value: function(){console.log('In object m1');},enumerable:true,configurable:true},
    address: { value: {hNo: '324/A/4',city: 'HYD'},enumerable:true }
});

console.log(m1.rno);
// m1.print();

Object.defineProperties(m1, {
    rno: {value: 456, enumerable: false},
    print: {value: function(){console.log('Modified Object m1');},enumerable:false}
});

// console.log(m1);
console.log(m1.rno);
// m1.print();

// If enumerable is false for any attribute in the object it'll not executing in the below methods

// for(var prop in m1) {
//     console.log(`${prop} : ${m1[prop]}`);
// }

console.log(Object.keys(m1));