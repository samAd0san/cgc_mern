/* This for (..of) statement lets you loop over the data structures that are iterable such as 
Arrays, Strings, Maps, Node Lists.*/

const arr = [1,2,3,4,5];

for(const i of arr) {
    console.log(i);
}

const str = "ALSAMAD"

for(const char of str) {
    console.log(char);
}

const map = new Map([
    ['a',1],
    ['b',2],
    ['c',3]
])

for(const [key,value] of map){
    console.log(key,value);
}