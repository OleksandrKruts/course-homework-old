"use strict";

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("done");
    reject(new Error("Error.Try again!"));
  }, 5000);
});

promise
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise was finished!"));


// async function promiseWithAsyncAndAwait(){
//     try {
//         let result = await promise;
//         console.log(result);
//       } catch (error) {
//         console.error("Error.Try again!");
//       } finally {
//         console.log("Promise was finished!");
//     }

// }
// promiseWithAsyncAndAwait();