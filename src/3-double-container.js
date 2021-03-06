// TODO: Implement Promise
var Promise = {
  resolve: function(value) {},
  reject: function(value) {}
}


// No cambiar inverse!
function inverse(x) {
  if (x === 0) {
    return Promise.reject("Division by zero");
  } else {
    return Promise.resolve(1 / x);
  }
}

module.exports = {
  inverse: inverse
};