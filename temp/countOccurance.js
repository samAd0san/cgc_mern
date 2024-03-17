// To check how many times the target element appears in the array
function countOccurance(arr,target){
    let count = 0;
    for(let num of arr){
        if(num === target){
            count++;
        }
    }
    return count;
}


process.stdout.write('The number of times target element appears: ');
process.stdout.write(countOccurance([1,2,5,2,2,7,4,2],2).toString());