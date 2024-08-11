let students = [
    { "name": "Samad", "rollNumber": 118, marks: 80 },
    { "name": "faisal", "rollNumber": 117, marks: 69 },
    { "name": "rizwan", "rollNumber": 78, marks: 35 },
    { "name": "musayb", "rollNumber": 119, marks: 55 },
]

// 1. Return the name of the students in capital
students.map((std) => {
    console.log(std.name.toUpperCase()); // SAMAD FAISAL RIZWAN MUSAYB
});

// 2. Return only the details of whom who scored more than 60 marks
students.filter((stds) => {
    if (stds.marks > 60) {
        console.log(stds); // { name: 'Samad', rollNumber: 118, marks: 80 } // { name: 'faisal', rollNumber: 117, marks: 69 }
    }
});

// 3. Return the details which rollno is greater than 117 and marks are greater than 60
students.filter((stds) => {
    if (stds.marks > 60 && stds.rollNumber > 117) {
        console.log(stds); // { name: 'Samad', rollNumber: 118, marks: 80 }
    }
});

// 4. Sum of marks of all the students
const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum); // 239

// 5. Return only the names of students who scored more than 60
students.filter((stds) => stds.marks > 60 ).map((stds) => { console.log(stds.name); }) // Samad faisal

// 6. Return total marks for students with marks greater than 60 after 20 marks have been 
// added to those who has scored less than 60 should not be return

const totalMarks = students
    .map((stu) => {
        if (stu.marks < 60) {
            stu.marks += 20;
        }
        return stu;
    })
    .filter((stu) => stu.marks > 60)
    .reduce((acc, curr) => acc + curr.marks, 0)

console.log(totalMarks) // 224