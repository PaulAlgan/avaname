var baseSite = require('./base.js');

var TwitterSite = function(){
  this.site = 'https://github.com/';
}

TwitterSite.prototype = Object.create(baseSite.__proto__);
TwitterSite.prototype.constructor = baseSite;

module.exports = new TwitterSite;
