//  app/models/user.js

// load dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./Comment');
var User = require('./User');

const videoSchema = Schema({
    author      : { type: Schema.Types.ObjectId, ref: 'User'},
    videoURL    : String,
    date        : Date,
    title       : String,
    description : String,
    likes       : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    views       : {type: Number, default: 0},
    comments    : [Comment]
});

videoSchema.methods.newComment = function(userId, commentText, cb) {
  const CommentModel = mongoose.model('Comment');
  const comment = new CommentModel({
    author: mongoose.Types.ObjectId(userId),
    comment: commentText,
    date: Date.now(),
    likes: []
  });
  this.comments.push(comment);
  this.save(cb);
};

videoSchema.statics.findById = function(videoId, cb) {
  return this.findOne({ _id: mongoose.Types.ObjectId(videoId) }, cb);
};

mongoose.model('Video', videoSchema);

// export model ================================================================
module.exports = videoSchema;

//videoSchema.methods.findLikesById = function (userId, callback) {
//    var index = this.likes.indexOf(userId);
//    if (index > -1) {
//        return callback(null, userId);
//    }
//    return callback(null, null);
//};


