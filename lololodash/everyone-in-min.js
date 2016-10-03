// include the Lo-Dash library
var _ = require("lodash");

var worker = function(temperature) {
  const results = {
    hot: [],
    warm: []
  };

  function checkTemperature(temperature) {
    return temperature>19;
  }

  _.forEach(temperature, function(town, t) {
    if(_.every(town, checkTemperature)) {
      results.hot.push(t);
    } else if(_.some(town, checkTemperature)) {
      results.warm.push(t);
    }
  });

  return results;
};

// export the worker function as a nodejs module
module.exports = worker;
