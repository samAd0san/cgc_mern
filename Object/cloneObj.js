// Since giving ref of one obj to other will reflect in change in both the objs values on 
// modifying the value, So we copy it for aquiring individual objects, it can be done in many way

var m1 = {
    width: 22,
    height: 32,
    color: 'Grey'
};

var m2 = {
    width: m1.width,
    height: m1.height,
    color: m1.color
};

// console.log(m1 === m2); // false 

// Copying the elements of an obj1 to other obj2

var emp1 = {
    name: 'Sohaib Samad',
    dept: 'DevOps',
    id: 234,
    isActive: true,

    address: {
        hNo: '8-1-423/A/305',
        landmark: 'Adams College'
    }
};


// Cloning an object with no nested elements

// emp2 = {};

// for(var key in emp1) {
//     emp2[key] = emp1[key];
// }

// console.log(emp2);
// console.log(emp1 === emp2); //false
// but for nested objects the above code will not work
// console.log(emp1.address === emp2.address); //true
 
// Cloning an object with nested elements

emp2 = {};

for(var key in emp1) {
    if(typeof emp1[key] === 'object') {
        emp2[key] = {};

        for(var innerKey in emp1[key]){
            emp2[key][innerKey] = emp1[key][innerKey];
        }
    }else{
        emp2[key] = emp1[key];
    }
}

// changing the value of the emp2 to check whether it'll reflect the emp1
// console.log(emp2);
emp2.address["hNo"] = '2345';
console.log("emp2:",emp2);
console.log('emp1:',emp1);
console.log(emp1.address === emp2.address); //false


