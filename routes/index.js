module.exports = function(app) {
	 

	 // Controller For API 
	 var Register = require('../controllers/api/v1/Register.js')(app);
	 var config = require('../config/app.js');
	

	 var printResponse = function(data, code, res) {
	   res.send({
	   		  data: data,
		      meta: {
		        code: code
		      }
		    });
	  }

  	app.printResponse = printResponse;

	app.config = config;
	
	var config = require('../config/app.js');

	app.post(config.urlWeb+'/user/postUser',Register.postUser);
	app.get(config.urlWeb+'/user/getUser',Register.getUser);
	app.delete(config.urlWeb+'/user/deleteUser',Register.deleteUser);
	app.put(config.urlWeb+'/user/updateUser',Register.updateUser);
}