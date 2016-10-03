'use strict';

// include the Lo-Dash library
var _ = require('lodash');

var worker = function(orders) {
  var orderResults= [];
  var total= 0;

  var orders= _.groupBy(orders, 'article')

  _.forEach(orders, function(item, key) {

    var key= +(key);
    var total= 0;

    if(item.length === 1) {
      total= item[0].quantity;
    } else {
      total= _.reduce(item, function(sum, item) {
        return sum + item.quantity;
      }, 0);
    }

    orderResults.push({
      article: key,
      total_orders: total
    });
  });

  orderResults= _.sortBy(orderResults, 'total_orders').reverse();
  return orderResults;
};

// export the worker function as a nodejs module
module.exports = worker;
