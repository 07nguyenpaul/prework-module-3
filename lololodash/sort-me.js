// include the Lo-Dash library
var _ = require("lodash");

// SORT FROM LARGEST TO SMALLEST
// _.SORTBY WILL ALWAYS SORT ASCENDINGLY
var worker = function(collection) {
  return _.sortBy(collection, 'quantity').reverse()
};

// export the worker function as a nodejs module
module.exports = worker;
