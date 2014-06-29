/**
 * Firebase
 *
 */

module.exports.firebase = function(app)
{
	var Firebase = require('firebase');
	var myRootRef = new Firebase('https://Vibeat.firebaseIO-demo.com/');
	myRootRef.set("Welcome");
	var childRef = new Firebase('https://Vibeat.firebaseIO-demo.com/users');

	function addVote(jsonVote){
		myRootRef.set(jsonVote);
	}
};

