// PART - 2

// Promise = It is an Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "It promise to return a value" 

// DO THE CHORES IN ORDER
// 1. GO ON A WALK
// 2. CLEAN THE ROOM
// 3. TAKE OUT THE TRASH

// Win + ; for emojies
function walk(callBack) {
    setTimeout(() => {
        console.log("WENT ON A WALK 🚶‍♀️");
        callBack();
    },2000);
}

function cleanRoom(callBack) {
    setTimeout(() => {
        console.log("CLEANED THE ROOM 🧹");
        callBack();
    },1500);
}

function trashOut(callBack) {
    setTimeout(()=> {
        console.log("TOOK OUT THE TRASH 🗑");
        callBack();
    },500)
}

// This is known as callback hell
walk(()=>{
    cleanRoom(()=>{
        trashOut(()=>{
            console.log("ALL THE CHORES ARE DONE!");
        });
    });
});

// to avoid this problem of callback hell use method chaining.