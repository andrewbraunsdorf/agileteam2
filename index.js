const express = require('express');
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.json());

app.use('/api', require("./api"));


// set up to listen for requests
app.listen(process.env.port || 8080, function(){
	console.log('now listening for requests');
})