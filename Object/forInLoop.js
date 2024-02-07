// for in loop - It is used to fetch the elements of the object

// Initializing the object

var employee = {
    name: 'Sam',
    Dept: 'SDE',
    salary: 35000,
    isActive: true,

    address: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',

        hNo: '8-1-423/A/305'
    },

    print: function() { }
}

// Array: Reflection
// bracket notation : It is used to access the values of the key '[]'

for(var i in employee) {
    // Only the keys will be accessed
    console.log(i,employee[i]);

    // Only the values will be accessed and i.e by bracket notation
    // console.log(employee[i]);
}