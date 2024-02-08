// Array - an array is a data structure that allows you to store
//and organize multiple values within a single variable. 

var arr = [10,34,21,64,13,56];

// console.log(arr);

// sum of all the elements present in the array

// var res = 0;
// for (let i = 0; i < arr.length; i++) {
//     // console.log('Sum of all the elemnts');
//     res += arr[i];
// }

// console.log(res);

function sumOfAllElementsInArray(inputArray){
    var res = 0;

    console.log('Sum of all the elements in the array');
    for (let i = 0; i < inputArray.length; i++) {
        // console.log('Sum of all the elemnts');
        res += arr[i];
    }
    
    console.log(res);
}
// sumOfAllElementsInArray(arr);

function calcGrade(agg){

    console.log('Grade Secured:');
    if(agg > 80 && agg <= 100){
        console.log('S');
    }else if (agg > 60 && agg <= 80) {
        console.log('A');
    }else if (agg > 35 && agg <= 60) {
        console.log('B');
    }else if (agg > 21 && agg <= 35){
        console.log('C');
    }else{
        console.log('Failed');
    }
}

// input - array , output - number
// agg = (marksSecured / totalNoOfMarks)

function calcAgg(marks){

    var marksSecured = 0;
    // To calculate CIE Marks i.e (40)
    totalNoOfMarks = marks.length*40;

    // To calculate SEE Marks i.e (40 + 60)
    // totalNoOfMarks = marks.length*100

    for(i = 0; i < marks.length; i++){
        marksSecured += marks[i];
    }

    agg = (marksSecured / totalNoOfMarks) * 100;

    // console.log(parseInt(agg));
    console.log('Percentage Secured:',(agg));

    calcGrade(agg);

}

var result = [32,36,40,33,34];
calcAgg(result);

