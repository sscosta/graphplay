var request = require('request');
var fs = require('fs');

var host = 'https://graph.facebook.com/';

request(host + 'facebook/picture?redirect=false').pipe(process.stdout);