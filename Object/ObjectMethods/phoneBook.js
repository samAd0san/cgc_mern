// Phone Book program

var p1 = {
    firstName: 'abs',
    lastName: 'sam',

    mobile: [
        {number: '9908992354', type: 'Personal', primary: true},
        {number: '7320140953', type: 'Home', primary: false},
        {number: '9390456321',type: 'Office', primary: false}
    ],

    email: ['sam@cgc.com','abc@gmail.com'],
    address: {
        hNo: '8-1-523/A/309',
        city: 'HYD',
        zip: '500008'
    }
}

var p2 = {
    firstName: 'oni',
    lastName: 'San',

    mobile: [
        {number: '9904676354', type: 'Personal', primary: true},
        {number: '6301940953', type: 'Home', primary: false},
        {number: '7703236321',type: 'Office', primary: false}
    ],

    email: ['oni@cgc.com','San@gmail.com'],
    address: {
        hNo: '432-4-35/A/645',
        city: 'HYD',
        zip: '500016'
    }
}

// Creating the list of objects

var phoneBook = [p1,p2];

function search(str) {
    var res = [];
    for(var i = 0; i < phoneBook.length; i++){
        var obj = phoneBook[i]
        if(obj.firstName.indexOf(str) > -1 || obj.lastName.indexOf(str) > -1){
            res.push(obj);
        }
    }
    return res;
}

console.log(search('sam'));