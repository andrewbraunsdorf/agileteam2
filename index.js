const express = require('express');



const app = express();

app.get('/', function(req, res){
	console.log('GET requests');
	res.send({name: 'name'});
});

app.post('/', function(req, res){
	console.log('POST requests');
	res.send({name: 'name'});
});

app.listen(process.env.port || 8080, function(){
	console.log('now listening for requests');
})