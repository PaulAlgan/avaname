var Foo = require('./foo.js');

var Bar = function() {
  this.name = 'Bar';
}

Bar.prototype = Object.create(Foo.__proto__);
Bar.prototype.constructor = Foo;

module.exports = new Bar;
