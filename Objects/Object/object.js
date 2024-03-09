;// Object: real life entity

var student = {
    name: 'sohaib samad',
    branch: 'CSE',
    rollno: 118,
    age: 20,

    marks: [31,35,32,37,40],

    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        hNo: '1-123/A/305'
    },

    print: function() {
        console.log(this.name,this.marks,this.address);
    }
};

// console.log(student.name);
// console.log(student.branch);
// console.log(student.rollno);
// console.log(student.age);
// console.log(student.marks);
// console.log(student.address);

// console.log(student.address.city);
// console.log(student.address.state);
// console.log(student.address.country);
// console.log(student.address.hNo);

// TO PRINT THE FUNCTION
student.print();
