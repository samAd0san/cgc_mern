/* In this program we will do insert and delete operation
in object type. */

var student = {
    name: 'samad',
    rno: 234,
    dept: 'IT',

    Attendance: '60%',
    marks: {
        Java: 40,
        Python: 36,
        DBMS: 35
    }
}

// Adding a new properties

student.performance = "Great";

// Modifying the value

student.performance = "Excellent"; // This method is prefered to be used when modifying a value
// student[performance] = "Excellent";

console.log(student);

// deleting any attribute from the object
console.log("After deleting the key/value",student.performance);
console.log();
delete student.performance;
console.log(student);
