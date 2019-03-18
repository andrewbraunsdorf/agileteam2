const express = require('express');



const app = express();

app.use('/api', require("/api"));


// set up to listen for requests
app.listen(process.env.port || 8080, function(){
	console.log('now listening for requests');
})