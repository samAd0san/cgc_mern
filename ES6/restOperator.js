// rest / spread operator - It is used to clone an object (Shallow cloning)

const person = {
    name : 'OniiChan',
    rno : 118,

    address: {
        hNo : '8-1-423/A/305',
        zip : 500008,
    },

    dept : 'CSE',

    fn : function() {
        console.log('fn');
    }
};

// Now we are Cloning the Object person with rest / spread operator in js

const porsen = {...person};

// Since it only supports shadow cloning it clone the upper layer to different memeory address
console.log(person === porsen); 

// It doesn't clone the nested objects to the different memory
console.log(person.address === porsen.address);
console.log(person.fn === porsen.fn);