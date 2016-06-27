#!/usr/bin/env node
var async = require('async');
var program = require('commander');

var twitterSite = require('./site/twitter.js');
var githubSite = require('./site/github.js');
var baseSite = require('./site/base.js');

program
  .arguments('<name>', 'name to check')
  .action(function(name) {

    var tasks = {};
    tasks.twitter = function(callback){
      twitterSite.checkAvaiable(name, function(avaiable){
        callback(null, avaiable);
      });
    }

    tasks.github = function(callback){
      githubSite.checkAvaiable(name, function(avaiable){
        callback(null, avaiable);
      });
    }

    async.parallel(tasks, function(err, results){
      Object.keys(results).forEach(function(key){
        console.log(key + ': ' + resultString(results[key]));
      });
    });

  })
  .parse(process.argv);

function resultString(avaiable){
  return avaiable?'\033[32mAvaiable!!\033[m': '\033[31mNOT avaiable\033[m'
}
