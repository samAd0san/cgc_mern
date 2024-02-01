// 1. Print hello world in javascript

// console.log('hello world');

// 2. Write a function to add two numbers

function sumOfIntegers(a,b){
    console.log('Sum of Two Integers: ');
    return a+b;
}
// console.log(sumOfIntegers(10,20));

// 3. Write a function to swap two numbers: ex: a= 10, b = 20; Output: a=20

function swap(c,d) {
    console.log('Before swap',c,d);
    var temp = c;
    c = d;
    d = temp;
    console.log('After swap',c,d);
}

// swap(10,20);

// 4. Print all the digits of a number ex: x = 123 output 1 2 3

function printNumber(num){

    num = num.toString();
    for(i = 0; i < num.length; i++){
        console.log(num[i]);
    }
}

printNumber(245);

// 5. Return sum of digits of a number ex: x = 123 output: 6 (1+2+3 = 6)

function sumOfDigits(num) {
    sum = 0;

    while(num > 0){
        
        var temp = num % 10;
        num = parseInt(num / 10);

        sum += temp;
    }
    console.log(sum);
}

// sumOfDigits(477);


// 6. Return total number of factors of a number ex: x = 4 output: 3 (factors: 1,2,4)
// i/p -> integer  o/p - > numbers

function factors(num){

    var count = 0;
    console.log('Factors of',num,'are: ')
    for(i = 1; i <= num; i++){
        if(num % i == 0){

            count++;
            console.log(i);
        }
    }
    console.log('Total Number of factors: ');
    console.log(count);
}

factors(12);
