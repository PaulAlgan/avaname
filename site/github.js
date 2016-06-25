var baseSite = require('./base.js');

var GitHubSite = function(){
  this.site = 'https://github.com/';
}

GitHubSite.prototype = Object.create(baseSite.__proto__);
GitHubSite.prototype.constructor = baseSite;

GitHubSite.prototype.responseAvaiable = function (err, response) {
  if (response.statusCode === 200) {
    return false;
  } else {
    return true;
  }

}


module.exports = new GitHubSite;
