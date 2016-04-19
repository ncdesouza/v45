/**
 * Created by nicholas on 25/01/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt  = require('bcrypt-nodejs');

const userSchema = Schema({
  email: String,
  password: String,
  username: String,
  firstName: String,
  lastName: String,
  profilePic: {type: String, default: '/public/img/ovowl.png'},
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    username: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  following : [{ type: Schema.Types.ObjectId, ref: 'User'}],
  followers : [{ type: Schema.Types.ObjectId, ref: 'User'}],
  privacy: Number,
});


userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// validate password
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.followUser = function(userId, cb) {
  this.following.push(userId);
  this.save(cb)
};

userSchema.methods.newFollower = function(userId, cb) {
  this.followers.push(userId);
  this.save(cb);
};

userSchema.methods.unFollowUser = function(userId, cb) {
  let index = this.following.indexOf(userId);
  let del = this.following.splice(index, 1);
  console.log(del);
  this.save(cb(null, del));
};

userSchema.methods.removeFollower = function(userId, cb) {
  let index = this.followers.indexOf(userId);
  let del = this.followers.splice(index, 1);
  this.save(cb(null, del));
};



mongoose.model('User', userSchema);

module.exports = userSchema;
