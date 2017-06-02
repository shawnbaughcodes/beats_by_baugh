console.log('Users Controller')
var mongoose = require('mongoose')

var User = mongoose.model('User')

module.exports = {
    index: function(req, res){
        User.find({}).exec(function(err, users){
            if(err){
                return res.json(err)
            }
            return res.json(users)
        })
    },
    create: function(req, res){
        var user = new User(req.body)
        User.create(req.body, function(err, user){
            if(err){
                return res.json(err)
            }
            return res.json(user)
        })
    },
    login: function(req, res) {
      User.findOne({email: req.body.email}, function(err, user){
        if(err){
            return res.json(err)
        }
        if(user && user.authenticate(req.body.password)){
            return res.json(user)
            }
            return res.json({
                "errors":{
                    "password":{
                        "message": "Invalid credientials."
                    }
                }
            })
        })
    }
}
