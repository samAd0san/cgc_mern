var e1 = {name: 'abc', salary : '10K', id: 123};
var e2 = {name: 'def', salary : '12K', id: 456};

// This is list of objects 
const employees = [e1,e2];

// console.log(employees[0]);
// console.log(employees[1]["salary"]);

for(key in employees) {
    console.log(employees[key]);
}