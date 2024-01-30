// ( Optimized ) checking if it is a prime number 
// input - number , o/p or return statement - boolean

// function isPrime(num){
//     if(num == 1) return false;

//     console.log("Is Prime?");
//     for(var i=2; i<= Math.sqrt(num); i++){
//         // var count = 2;

//         if(num % i == 0)
//             return false;
//     }
//     return true;
// }
// // console.log(isPrime(6));

// function testPrime(n){
//     for(var i=1; i<=n; i++){
//         console.log(i,isPrime(i));
//     }
// }

// testPrime(7);

// input -> number, o/p - > boolean (true/false)

function isPrime(num) {

    if (num == 1)return false;
    for(i = 2; i <= Math.sqrt(num); i++) { 
        if(num % i == 0) return false;
    }
    return true;
}

// var res = isPrime(6);
// console.log(res);

// input - > number, o/p - > boolean

function rangeIsPrime(range) {
    console.log("Is the number boolean?");

    for(j = 1; j <= range; j++){
        var output = isPrime(j);
        console.log(j,output);
    }
}

rangeIsPrime(20);