console.log('Seeing routes');
var fs = require('fs');
var path = require('path');

var Users = require('../controllers/users_controller');
var Tracks = require('../controllers/tracks_controller');

module.exports = function(app) {
    // USERS
    app.get('/users', Users.index)
    app.post('/users', Users.create)
    app.post('/sessions', Users.login)
    // TRACKS
    app.get('/tracks', Tracks.index)
    app.post('/tracks', Tracks.create)
    app.put('/tracks/:id', Tracks.update)
}
