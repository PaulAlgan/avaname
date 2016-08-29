var request = require('request');
var baseSite = require('./base.js');

var Domain = function(){
  this.site = 'http://www.checkdomain.com/cgi-bin/checkdomain.pl'
}

Domain.prototype = Object.create(baseSite.__proto__);
Domain.prototype.constructor = baseSite;

var responseAvaiable = function (err, body) {
  result = body.split('<CENTER><TABLE><TR><TD><PRE>');
  result.shift();

  if (result.length > 0) return false;
  else return true;
}
Domain.prototype.responseAvaiable = responseAvaiable;

Domain.prototype.checkAvaiable = function (name, callback) {
  var options = {
    url: this.site + '?domain=' + name + '.com'
  }

  request.get(options, function(err, response, body){
    callback(responseAvaiable(err, body))
  });
}


module.exports = new Domain;
