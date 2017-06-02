var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter first name!']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter last name!']
    },
    email: {
        type: String,
        required: [true, 'Please enter email!'],
        validate: {
            validator: function(v){
                return /\S*\@\S*\.\S+/g.test(v);
            },
            message: 'Email must be valid.'
        },
        unique: true
    },
    password: {
        type: String,
        required:[true, 'Please enter passoword']
    },
    tracks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track'
    }]
})

UserSchema.methods.hashPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(callback) {
    this.hashPassword(this.password);
    callback();
});

mongoose.model('User', UserSchema)
