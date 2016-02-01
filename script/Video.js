//  app/models/user.js

// load dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./Comment');
var User = require('./User');

const videoSchema = Schema({
    author      : User,
    videoURL    : String,
    date        : Date,
    title       : String,
    description : String,
    likes       : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    views       : {type: Number, default: 0},
    comments    : [Comment]
});

videoSchema.methods.findLikesById = function (userId, callback) {
    var index = this.likes.indexOf(userId);
    if (index > -1) {
        return callback(null, userId);
    }
    return callback(null, null);
};

videoSchema.methods.findMostRecentAndTrending = function(callback) {
    this.model('Video')
        .find({})
        .sort({date: -1})
        .exec(function(err, doc) {
            doc.populate({
                path: 'videos.author',
                select: '-_id -videos -google -twitter -facebook -password -email',
                model: 'User'
            }, function(err, doc) {
                doc.populate({
                    path: 'videos.comments',
                    model: 'Comment',
                    options: {sort: {date: 1}}
                }, function (err, doc) {
                    doc.populate({
                        path: 'videos.comments.author',
                        select: '-_id -videos -google -twitter -facebook -password -email',
                        model: 'User'
                    }, function (err, doc) {
                        callback(null, doc);
                    });
                });
            });
        }
    );
};

mongoose.model('Video', videoSchema);

// export model ================================================================
module.exports = videoSchema;


