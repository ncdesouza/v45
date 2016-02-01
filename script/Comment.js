// load dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');

var commentSchema = Schema({
    author      : User,
    comment     : String,
    date        : Date,
    likes       : [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

commentSchema.methods.findAuthor = function(callback) {
    return this.model('User').findById(this.author)
        .lean()
        .exec(callback);
};

mongoose.model('Comment', commentSchema);

// export model ================================================================
module.exports = commentSchema;



