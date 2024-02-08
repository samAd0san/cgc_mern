// loops

// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i>=0; i++){
//     console.log(i);
// }

// for (var i = 0; i <= 10; i++) {
//     if (i >= 4) break;
//     else if (i == 2) continue;
//     console.log(i);
// }

// for (var i=0; i<=10; i++){
//     console.log(i+"th iteration");
//     for (var j=0; j<=5; j++){
//         console.log(j);
//     }
//     console.log();
// }


for (var i = 0; i <= 5; i++) {
    // var ij = i+j;
    for (var j = 0; j <= 5; j++) {
        // console.log(i,j,ij);
    }
}

function multTable(n) {
    for (var i = 1; i <= n; i++) {
        console.log("Multiplication Table of " + i);

        for (var j = 1; j <= 10; j++) {

            var res = i * j;
            console.log(i + " * " + j + " = ", res);
        }
        console.log();
    }
}

// multTable(12);

function oneTable(i){
    console.log("Multiplication Table of " + i);

    for(var j=0; j<=10; j++){
        var res = i * j;
        console.log(i + " * " + j + " = ", res);
    }
}

// oneTable(18);

function isEven(n){
    if (n % 2 === 0){
        return true;
    }else
        return false;
}
// console.log(isEven(321));

// for(var i = 1; i <=10; i++){
//     console.log("is Even?");
//     console.log(i,isEven(i));
// }


// Print even numbers
// for(var i = 2; i <= 10 ; i+=2){
//     console.log(i,isEven(i));
// }

// var i = 1;
while(i <= 10){
    // console.log(i);
    i++
}

// var i=16;
// do{
//     console.log(i);
//     i++;
// }while(i < 10);






