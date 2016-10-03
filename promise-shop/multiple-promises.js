// Create a function all that accepts two promises as arguments. This all function should do all of the following:
//
// Create an internal promise in whatever way you see fit.
//
// Create a counter variable with initial value of 0.
//
// Attach then fulfillment handlers to both promises and increment the internal counter when the handlers are called.
//
// When the counter reaches 2, fulfill the internal promise with an array containing both values.
//
// Finally return that internal promise to the user.
//
// After you finish writing your all function, pass getPromise1() and getPromise2() into your new function and then attach console.log as a fulfillment handler to the promise returned by your function. These two promise-returning functions will be provided to you in the global scope.
// While this lesson is a good practice for your skills, in real world programming, such a task is usually achieved by using Promise.all utility function, which we are basically reimplementing. It works by taking an iterable (like an array) of promises, rather than separate arguments. It also handles error catching, and any errors will be forwarded.
//
// Promise.all([getPromise1(), getPromise2()])
//   .then(onFulfilled, onRejected);
// In this lesson though, rest assured that that Promise.all is disabled

'use strict';

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    var counter = 0;
      var out = []

      promise1.then(function (val) {
          out[0] = val;
          counter ++;

          if(counter >=2 ) {
              fulfill (out);
          }
      });

      promise2.then(function (val) {
          out[1] = val;
          counter ++;
          if (counter >=2) {
              fulfill(out);
          }
      });
  });
}


all(getPromise1(), getPromise2()).then(console.log);
