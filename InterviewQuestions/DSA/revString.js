// Reverse a String using For loop
function revString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(revString("samad"));

// Using pre-defined methods
function methodRevStr(str) {
    return str.split("").reverse().join("");
}

console.log(methodRevStr("damas"));

