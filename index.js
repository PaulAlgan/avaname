#!/usr/bin/env node
var async = require('async');
var program = require('commander');

var twitterSite = require('./site/twitter.js');
var githubSite = require('./site/github.js');

program
  .arguments('<name>', 'name to check')
  .action(function(name) {

    twitterSite.checkAvaiable(name, function(avaiable){
      console.log('Twitter: ' + resultString(avaiable));
    });

    githubSite.checkAvaiable(name, function(avaiable){
      console.log('GitHub: ' + resultString(avaiable));
    });

  })
  .parse(process.argv);

function resultString(avaiable){
  return avaiable?'\033[32mAvaiable!!\033[m': '\033[31mNOT avaiable\033[m'
}
