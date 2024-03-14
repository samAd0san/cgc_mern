const person = {
    id : 1,
    name : 'Person',
    age : 23,
    gender : 'male',
}

for (let key in person){
    // console.log(key); // this will only print the keys
    // console.log(person[key]); // this will print the values 
}

const num = [10,20,30,40,500,6];

for(let index in num){
    console.log(index); // this will print the indices
    // console.log(num[index]); // this will print the values

    if(num[index] === 10) {
        console.log(num[index]);
    }
}

