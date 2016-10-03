 // Feel free to explore all three functions at your own pace. When you are preparing to submit though, make sure you are using at least catch and one of Promise.resolve and Promise.reject
 //


'use strict';

var promise = Promise.reject(new Error('ERROR ERROR ERROR'));

promise.catch((err) => console.error(err.mesage));
