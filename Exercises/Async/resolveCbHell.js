// PART - 3
// Promise = It is an Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "It promise to return a value" 


// AIM - To avoid the problem of callback hell use method chaining.

// DO THE CHORES IN ORDER
// 1. GO ON A WALK
// 2. CLEAN THE ROOM
// 3. TAKE OUT THE TRASH

function walk() {
    // Promise takes a function (res,rej) in its parameter
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const doneWalk = true;
            if(doneWalk){
                resolve("WENT ON A WALK 🚶‍♀️")
            }else{
                reject("NOT DONE THE WALK")
            }
        },2500);
    });
}

function cleanRoom() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleaned = true;
            if(cleaned){
                resolve("CLEANED THE ROOM 🧹")
            }else{
                reject("DID NOT CLEANED ROOM")
            }
        },1500);
    });
}

function outTrash() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            // const dumped = false;
            const dumped = true;
            if(dumped){
                resolve("TOOK OUT THE TRASH 🗑")
            }else{
                reject("DID NOT DUMPED THE TRASH")
            }
        },500);
    });
}
// FROM MUJEEB SIR
/*
walk()
    .then((value)=>{
        console.log(value);
        cleanRoom() 
            .then((value)=>{
                console.log(value);
                outTrash()
                .then((value)=>{
                    console.log(value);
                    console.log("ALL CHORES COMPLETED");
                });
            });
    });
*/

// METHOD 2 FROM BRO CODE
// To resolve the callback hell issue
// Promise Chaining (CONSIDER THIS)
walk()
    .then((value)=>{console.log(value); return cleanRoom()})
    .then((value)=>{console.log(value); return outTrash()})
    .then((value)=>{console.log(value); console.log("ALL CHORES COMPLETED");})
    .catch((value)=>{console.log(value);})
