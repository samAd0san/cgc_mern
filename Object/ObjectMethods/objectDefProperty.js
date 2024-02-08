// It directly defines a property of an object or it modifies it

var m1 = {};
Object.defineProperty(m1,'key1',{
    value: '23$6!#^',
    enumerable: true, // make this true then only it'll reflect on the array
    configurable: true // to redefine the same property we should set to true
});

Object.defineProperty(m1,'key2',{
    value: '5@$64*',
    enumerable: true
});

Object.defineProperty(m1,'key1',{ // redefining key1
    value: 'null',
    enumerable: true
});

console.log(m1);