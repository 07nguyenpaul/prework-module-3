'use strict';
// include the Lo-Dash library
var _ = require('lodash');

var words = (wordArray) =>{
  return _.chain(wordArray)
          .map((item) => {
            return item + 'chained';
          })
          .map((item) =>{
            return item.toUpperCase();
          })
          .sortBy()
          .value();
};

// export the words function as a nodejs module
module.exports = words;
