'use strict';

// include the Lo-Dash library
var _ = require("lodash");

var worker = (commentsArray) => {
  var count= [];

  var comments = _.groupBy(commentsArray, 'username');

  _.forEach(comments, (item, name) => {
    count.push({
      username: name,
      comment_count: _.size(item)
    });
  });
  return _.sortBy(count, 'comment_count').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
