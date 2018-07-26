'use strict';

// require and use express, require body-parser, create a port
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))


// write a catch all route that will respond with status of 418 ;)
//https://sitesdoneright.com/blog/2013/03/what-is-418-im-a-teapot-status-code-error
app.use(function(req, res, next){
   res.sendStatus(404)
})


/* don't change the code below this line */

app.listen(port, function(){
  console.log("listening on port", port);
})


// your server should be named app since that is what is being exported here
module.exports = app;
