console.log('Tracks Controller')
var mongoose = require('mongoose')

var Track = mongoose.model('Track')
var User = mongoose.model('User')

module.exports = {
    index: function(req, res){
        Track.find({}).exec(function(err, tracks){
            if(err){
                return res.json(err)
            }
            return res.json(tracks)
        })
    },
    create: function(req, res){
        var track = new Track(req.body)
        Track.create(req.body, function(err, track){
            if(err){
                return res.json(err)
            }
            User.findById(req.body.user, function(err, user){
                if(err){
                    return res.json(err)
                }
                user.tracks.push(track._id)
                user.save(function(err, user){
                    if(err){
                        return res.json(err)
                    }
                    return res.json(track)
                })
            })
        })
    },
    update: function(req, res){
        Track.findByIdAndUpdate(req.body, { $set: req.body }, {new: true}, function(err, track){
            if(err){
                return res.json(err)
            }

        })
    }
}
