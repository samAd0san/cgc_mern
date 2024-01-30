// /* To remember // truthy & falsy: 0, "", NaN, undefined, null, false */

// console.log('Back');

var num1 = 10;
var num2 = 30;

var result = num1 + num2;
// console.log(result);

// console.log(num1 / num2);
// console.log(num1 % num2);

var int = 10;

// console.log(int--);
// console.log(int);  
// var integer = int;
// console.log(integer);  

// var sn = 'samad';
// sn = 2;
// sn = 'nopey'

// console.log(sn)

// In the strings the indexing starts from ZerO!
var str = 'Koreno string desu'

// console.log(str);

// var res = str.indexOf('string');
// console.log(res);

// var res =  str.lastIndexOf('string');
// console.log(res);

var nam = '10';
var num = 10; 

var res = nam + num;
// console.log(res);
// console.log(typeof res);
//  res = parseInt(res);
// console.log(typeof res);
//  res = parseFloat(res);
// console.log(typeof res);

// truthy & falsy: 0, "", NaN, undefined, null, false

// function add(a,b) {

//     console.log("Sum of " + a +" and " + b +" is: " + res); 
//     return a + b; 
// }

// var res = add(10,30);

// console.log(res);

// function sum(c,d) {

//     var result = c + d; 
//     console.log("Sum of " + c +" and " + d +" is: " + result); 
// }

// sum(10,20);

function outerFunciton() {
    console.log('outer function');

    function innerFunction() {
        console.log('Inner funciton');
    }

    innerFunction();

}

// outerFunciton();
// innerFunction();

// var sum = function(a,b) {
//     op = a + b; 
//     console.log("sum a and b " + op);
// }

// sum(32,54);

// console.log(typeof sum);


// var marks = [23,54,76,21,77,12];

// marks.push(30);

// console.log(marks);

// marks.pop();

// console.log(marks);

// marks.unshift(23); // This method adds a value to the front
// marks.shift(); // This method removes an element from the front

// console.log(update);
// console.log(marks);

// CALCULATING THE CIE PERCENTAGE OF THE MARKS THE STUDENT SECURED 

function percentage(marks) {

    // step -1 The student attended 5 exams so we do sum first
    var sumOfMarks = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
    console.log(sumOfMarks);

    // step -2 after we secure the marks we are multiplying the total no of
    // subject with 100, 100 bcoz each subject consists of 20 marks

    var totalSubjects = marks.length * 40;
    console.log(totalSubjects);

    // step -3 Now performing the actual calculation to find out the 
    // percentage of the student

    var marksResult = (sumOfMarks/totalSubjects) * 100;

    // return marksResult;
    console.log(marksResult);
}

// var samMarks = [40,36,34,32,39];

// percentage(samMarks);

    // var marks = 0;

    // if (marks) {
    //     console.log('passed');
    // }
    // else {
    //     console.log('failed');
    // }

    // SWITCH STATEMENT
    
    // var fruit = 'Mango';

    // switch(fruit) {
    //     case "Apple":
    //         console.log('An apple a Day keeps a Doc awy');
    //         break;
        
    //     case "Orange":
    //         console.log('An Orange contains citric acid');
    //         break;
        
    //     case "Mango":
    //         console.log('Mango is the most tastiest fruit');
    //         break;
    //     default:
    //         console.log('1.Apple \n2.Orange \n3.Mango');
    // }

    // Ternary op is a short-hand way to write if-else statement
    // var a = 10;
    // var b = 20;

    // var max = (a > b) ? a : b;  
    // console.log(max);

// CALCULATING THE ELECTRICITY BILL
/* 0-50 units: Rate = 2 per unit
51-100 units: Rate = 3 per unit
Above 100 units: Rate = 5 per unit */

function bill(unit) {

    var amount = 0;

    if(unit > 100){
        var highSlabUnit = unit - 100;
        var highSlabCost = highSlabUnit * 5;

        amount += highSlabCost;
        unit -= highSlabUnit;
    } 

    if(unit > 50) {
        var midSlabUnit = unit - 50;
        var midSlabCost = midSlabUnit * 3;

        amount += midSlabCost;   
        unit -= midSlabUnit;
    }

    if(unit > 0) {
        var lowSlabUnit = unit - 0;
        var lowSlabCost = lowSlabUnit * 2;

        amount += lowSlabCost;
    }

    console.log('The amount is: ' + amount)

    var tax = amount * 0.05;

    console.log('The Tax is: ' + tax);
    totalAmount = amount + tax;

    console.log('The bill of ' + unit +' units is: ' + totalAmount);
}

// bill(120);   

