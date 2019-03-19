const express = require('express');
const router = express.Router();

router.get('/employees', function(req, res){
	res.send({type: 'GET'});
});

router.post('/employees', function(req, res){
	console.log(req.body);
	res.send({type: 'POST',
		name: req.body.name,
		rank: req.body.rank
	});
});

router.put('/employees/:id', function(req, res){
	res.send({type: 'PUT'});
});

router.delete('/employees/:id', function(req, res){
	res.send({type: 'DELETE'});
});

module.exports = router;
