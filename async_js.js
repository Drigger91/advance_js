//by default js is sync, blocking and single threaded
//browsers and frameworks like node helps us enable async js

//1 setTimeout and setInterval

setTimeout((name) => {console.log(`Hi ${name}`)}, 2000, "Piyush");

// setTimeout(fnc, timeout, ...params)
//note that the sometimes the code can take >= timeout, but never less
let count = 0;
const intervalId = setInterval((name) => {
    console.log("Hi from interval : " + name);
    count++;
    if (count > 2) clearInterval(intervalId);  // helps to stop executing the function
}, 1000, "Piyush");
//it will execute after every timeout seconds
//note that in setInterval the execution time is considered in timeout

//setInterval can be acheived by recursive setTimeout

// like clearInterval there is clearTimeout also, which can help in debouncing


//<-------------- Callbacks ---------- >


//any function that is passed as a parameter to another function is called callback function
//by default in javascript functions are objects itself
//the function which takes function as a parameter is called higher order function
//used in cases where for an execution we have to wait for the previous function to complete
//Promises are the major callbacks that are used
//there are three states in which a promise can be : pending, success, rejected
