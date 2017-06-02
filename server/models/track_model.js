var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter track title']
    },
    genre: {
        type: String,
        required: [true, 'Please enter track genre']
    },
    producer: {
        type: String,
        required: [true, 'Please enter track producer']
    },
    track: {
        type: String,
        required: [true, 'Please enter track link']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }}, {timestamps: true})

mongoose.model('Track', TrackSchema)
