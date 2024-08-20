// There are three part of extracting a part of String
/**
 * slice(start, end) - index start from 0
 * substring(start, end)
 * substr(start, Length)
 */

const text = "This is a String one, it is being used by the slice method"
const text1 = "MENTORSHIP"
console.log(text.slice(0,4)); // indexing starts from 0 // This
console.log(text1.slice(5)) // RSHIP
console.log(text1.slice(-1)) // P
console.log(text1.slice(-4,-1)) // SHI
 
const anotherText = "This is a String one, it is being used by the substring method"
const text2 = "PROPERLY"
console.log(anotherText.substring(0,4))
console.log(text2.substring(-1)) // It treats the less than 0 value as 0 // PROPERLY
// same as text2.substring(0)
