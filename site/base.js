var request = require('request');

var BaseSite = function (){
  this.site = '';
}

BaseSite.prototype = {
  checkAvaiable: function (name, callback) {
    var self = this;
    var options = {
      url: this.site + name
    }

    request.get(options, function(err, response, body){
      callback(self.responseAvaiable(err, response))
    });
  },
  responseAvaiable: function (err, response) {
    if (response.statusCode/100 === 2) {
      return false;
    } else {
      return true;
    }

  }
}



// BaseSite.prototype.checkAvaiable = function (name, callback) {
//   var options = {
//     url: this.site + name
//   }
//
//   request.get(options, function(err, response, body){
//     console.log(response.statusCode);
//     callback(BaseSite.responseAvaiable)
//   });
// };
//
// BaseSite.prototype.responseAvaiable = function (err, response) {
//   console.log('responseAvaiable');
//   return true;
// };

module.exports = new BaseSite;
