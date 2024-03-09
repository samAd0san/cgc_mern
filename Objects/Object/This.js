/* This 'this' keyword refers to the object which is currently being executed */

const m1 = {
    width : 10,
    height : 7,

    print: () => {
        console.log(this);
    }
}

// m1.print();


const m2 = {
    width : 10,
    height : 7,

    print: () => {
        // console.log(this);
        const inner = () => {
            console.log(this);
        }
    }
}

m2.print();
const p = m2.print();
// console.log(p);

const m3 = {
    name: 'Mobile',
    width: 5,
    height: 7,

    print: function(a,b,c) {
        console.log(this.width,a,b,c);
    }
}

const p1 = m3.print(1,2,3);
console.log(p1);