// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise executing");
//         resolve();
//     }, 1000);
// });
//promiseOne.then(() => console.log("Promise executed"));

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise executing");
//         const dataFromSomewhere = {
//             name : 'Piyush',
//             age : 21,
//         }
//         if (dataFromSomewhere?.x?.length) {
//             resolve(dataFromSomewhere.x.length);
//         } else {
//             reject("Something went wrong!");
//         }
        
//     }, 1000);
// });
// promiseTwo.
// then((data) => console.log("Promise executed got data", data))
// .catch((message) => console.log("Failed due to ", message))
// .finally(() => {
//     console.log("Finally called");
// });

// function check(num) {
//     console.log("NUM ", num);
// }
// function check(num, data) {
//     console.log("NUM ", num, data);
// }