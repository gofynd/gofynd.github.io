'use strict';

var download = require('download');
var request = require('request');
var path = require('path')
var fs = require('fs')


let destDir = "project/_posts"

let url = "https://api.github.com/orgs/gofynd/repos";
request({
    uri: url,
    json: true,
    headers: {
        'User-Agent': 'Awesome-Octocat-App'
      }
}, function (error, response, body) {
    

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

    body.forEach((o, i) => {
        let durl = `https://raw.githubusercontent.com/gofynd/${o.name}/master/project.md`;
        let dpath = path.join(__dirname, destDir, o.name + ".md");
        download(durl).pipe(fs.createWriteStream(dpath));
        console.log("Done", o.name, dpath);
        console.log("print", o.forks_count, o.description, o.html_url);
        
    })
});
