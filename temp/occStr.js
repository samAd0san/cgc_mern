// Given a string, write a function to count the occurrences of each character in the string. 

function occOfCharInString(str) {
    const count = {};
    for(let i = 0; i < str.length; i++){
        let alphabet = str[i];
        if(count[alphabet]){ // Ya'ni value of the key
            count[alphabet]++;
        }
        else{
            count[alphabet] = 1;
        }
    }
   return count;
}

function countCharacterOccurrences(str) { 

    const charCount = {}; 
  
    for (let char of str) { 
  
      charCount[char] = (charCount[char] || 0) + 1; 
  
    } 
  
    return charCount; 
  
} 

const result = occOfCharInString('Occurrance of String');
console.log(result);