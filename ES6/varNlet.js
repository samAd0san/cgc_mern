// Here we'll discuss the difference b/w var, let and const keyword

// var - function Scoped (global)
// let,const - Blocked scope 

// 'var' keyword
function fn() {
    // var arr = [10,20,30];
    if(true) {
        var arr = [10,20,30]; // It'll execute within the boundary of the function only

        console.log(arr);
    }
    console.log(arr);
}
// console.log(arr); // var is function specific, so it won't execute

// fn(); 

// 'let' keyword
function fun() {
    if(true) {
        let arr = [10,30]; // The block in which we declare it'll exist only in that block

        console.log(arr); 
    }
    // console.log(arr); // won't execute cuz 'let' is block specific
}
// console.log(arr); // won't execute cuz 'let' is block specific

// fun();

// 'const' keyword
function funn() { 
    if(true) {
        const arr = [1,2,3,4]; // We cannot reassign the value of the 'const' keyword
        // It is block specific same as 'let' keyword

        // Insertion and deletion is permitted in the const keyword
        arr.push(5);
        console.log(arr);
        // arr.pop();
        arr.splice(1,2); // Remove elements starting from index 1, remove 2 elements
        console.log(arr);

        // arr = [10,20,30,40]; // reassigning is not allowed in const key word
    }
    try{
        console.log(arr); // It'll show not defined bcoz it is not declared inside its block
    }catch(err) {
        console.log(err.message);
    }
    
}
funn();

var variable = [10,'Sam',false,undefined,null,];

console.log(variable);