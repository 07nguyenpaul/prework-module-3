// include the Lo-Dash library
   var _ = require("lodash");

   var worker = function(userList) {
       return _.filter(userList, { active: true });
   };

   // export the worker function as a nodejs module
   module.exports = worker;
