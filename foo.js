var Foo = function() {
  this.name = 'foo';
}

Foo.prototype.print = function() {
    console.log('this is',this.name);
};

module.exports = new Foo;
