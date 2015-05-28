var mongoose = require('mongoose');

var dbcredential = process.env.OPENSHIFT_MONGODB_DB_URL;
var dbname = 'miunashout';

var url = dbcredential + dbname;

mongoose.connect(url);

var User = mongoose.model('User', { nama: String,email : String, kelas: String, jurusan: String, asal_sekolah: String });

module.exports = function(app) {

    var postUser = function(req,res){
    	if(req.body.name === undefined || req.body.email === undefined || req.body.kelas === undefined || req.body.jurusan === undefined || req.body.asal_sekolah === undefined){
    		return  app.printResponse({success : false,info:"Please Completed All Data"}, 200, res);
    	}

		var user = new User({nama: req.body.name,email : req.body.email, kelas: req.body.kelas, jurusan: req.body.jurusan, asal_sekolah: req.body.asal_sekolah });
		user.save(function (err) {
		  if (err) return handleError(err);
		  app.printResponse({success : true,info:"Register Success"}, 201, res);
		})
    } 

    var getUser = function(req,res){
    	User.find({},function(err,data){
			app.printResponse(data, 201, res);
    	})
    } 

     var deleteUser = function(req,res){
    	User.remove({email : req.body.email},function(err,data){
			if(err) return handleError(err);
				app.printResponse({success : true,info:"Email " + req.body.email + " Has Been Removed"}, 201, res);
    	})
    } 

    var updateUser = function(req,res){
    	if(req.body.name === undefined || req.body.email === undefined || req.body.kelas === undefined || req.body.jurusan === undefined || req.body.asal_sekolah === undefined){
    		return  app.printResponse({success : false,info:"Please Completed All Data"}, 200, res);
    	}

    	User.where({ email : req.body.email}).update({ nama: req.body.name,email : req.body.email, kelas: req.body.kelas, jurusan: req.body.jurusan, asal_sekolah: req.body.asal_sekolah},function(err){
    		if(err) return handleError(err);
				app.printResponse({success : true,info:"Email " + req.body.email + " Has Been Updated"}, 201, res);
    	})
    	
    } 

    return {
      postUser : postUser,
      getUser : getUser,
      deleteUser : deleteUser,
      updateUser : updateUser
  }

}

