// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

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
            const dumped = false;
            // const dumped = true;
            if(dumped){
                resolve("TOOK OUT THE TRASH 🗑")
            }else{
                reject("DID NOT DUMPED THE TRASH")
            }
        },500);
    });
}

// async function returns a promise
async function doChores(){
    try{
        // await makes an async function wait for the promise to return
        const walkResult = await walk();
        console.log(walkResult);

        const cleanRoomResult = await cleanRoom();
        console.log(cleanRoomResult);

        const outTrashResult = await outTrash();
        console.log(outTrashResult);

        console.log("ALL CHORES ARE DONE");
    }catch(error){
        console.error(error);
    }
    
}

// calling the async function
doChores();