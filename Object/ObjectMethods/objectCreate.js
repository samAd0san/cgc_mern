// This method creates a new object and also inherits properties of another object

var student = {
    name: 'Sam',
    id: 123,

    address: {
        hNo: 132,
        city: 'Hyd'
    },

    print: function() {
        console.log('This is a function in obj student');
    }
};

// Now creating a new object with object.Create(); method

var talib = Object.create(student, {
    newName : {value: 'oni',enumerable: true},
    print: {value: function(){console.log('This is a function in obj talib');} }
});

talib.print();
student.print.call(talib);
