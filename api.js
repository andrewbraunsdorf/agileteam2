const express = require('express');
const router = express.Router();

// we need to get the Employee model from our schema file
const Employee = require('./employees');

            // GET ROUTES
// GET route, get a list of all the employees from the database
router.get('/employees/', function(req, res, next){
    Employee.find({}).then(function(employees){
        res.send(employees);
    });
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
