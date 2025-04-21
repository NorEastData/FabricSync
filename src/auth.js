module.exports = function() {
  this.delay = ms => new Promise(res => setTimeout(res, ms));
}

