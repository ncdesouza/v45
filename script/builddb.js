/**
 * Created by nicholas on 29/09/15.
 */


// connect to db
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/video45'); // connect to db

// get db models
require('./User.js');
require('./Video.js');
require('./Comment.js');

var User = mongoose.model('User');
var Video = mongoose.model('Video');
var Comment = mongoose.model('Comment');

var videoUrls = [
    'Drake - Hotline Bling.mp4',
    'Bobby Shmurda - Hot Ngga.mp4',
    'AAP ROCKY - Fkin Problems ft Drake 2 Chainz Kendrick Lamar.mp4',
    'OT Genasis - CoCo Music Video.mp4',
    'Ty Dolla ign - Or Nah ft The Weeknd Wiz Khalifa  DJ Mustard Music Video.mp4',
    'Wiz Khalifa - On My Level Ft Too Short Official Music Video.mp4',
    'Wiz Khalifa - We Dem Boyz Official Video.mp4',
];


var user1 = new User({
    email: 'user1@test.com',
    password: 'test',
    firstName: 'user1',
    lastName: 'test',
    username: 'user1'
});

user1.password = user1.generateHash('test');

var user2 = new User({
    email: 'user2@test.com',
    password: 'test',
    firstName: 'user2',
    lastName: 'test',
    username: 'user2'
});

user2.password = user2.generateHash('test');

user1.save(callback);
user2.save(callback);

var video1 = new Video({
    author: user1,
    videoURL: '/public/vid/' + videoUrls[0],
    date: new Date(2015, 9, 21),
    title: 'Video1',
    description: 'Test video'
});

var video2 = new Video({
    author: user2,
    videoURL: '/public/vid/' + videoUrls[1],
    date: new Date(2015, 9, 22),
    title: 'Video2',
    description: 'Test video'
});

var video3 = new Video({
    author: user1,
    videoURL: '/public/vid/' + videoUrls[2],
    date: new Date(2015, 9, 23),
    title: 'Video3',
    description: 'Test video'
});

var video4 = new Video({
    author: user1,
    videoURL: '/public/vid/' + videoUrls[3],
    date: new Date(2015, 9, 24),
    title: 'Video4',
    description: 'Test video'
});

var video5 = new Video({
    author: user1,
    videoURL: '/public/vid/' + videoUrls[4],
    date: new Date(2015, 9, 25),
    title: 'Video5',
    description: 'Test video'
});

var video6 = new Video({
  author: user2,
  videoURL: '/public/vid/' + videoUrls[5],
  date: new Date(2015, 9, 25),
  title: 'Video6',
  description: 'Test video'
});

var video7 = new Video({
  author: user2,
  videoURL: '/public/vid/' + videoUrls[6],
  date: new Date(2015, 9, 25),
  title: 'Video7',
  description: 'Test video'
});

var comment1 = new Comment({
    author : user2,
    comment : 'Comment1',
    date    : new Date(2015, 9, 21)
});

var comment2 = new Comment({
    author : user1,
    comment : 'Comment2',
    date    : new Date(2015, 9, 22)
});

var comment3 = new Comment({
    author : user1,
    comment : 'Comment3',
    date    : new Date(2015, 9, 23)
});

var comment4 = new Comment({
    author : user2,
    comment : 'Comment4',
    date    : new Date(2015, 9, 24)
});

var comment5 = new Comment({
    author : user2,
    comment : 'Comment5',
    date    : new Date(2015, 9, 25)
});



//user1.save(callback);
//user2.save(callback);

video1.comments.push(comment1);
video1.comments.push(comment2);
video1.comments.push(comment3);
video1.comments.push(comment4);
video1.comments.push(comment5);
video3.comments.push(comment3);
video4.comments.push(comment4);
video5.comments.push(comment5);
video2.comments.push(comment2);

//comment1.save(callback);
//comment2.save(callback);
//comment3.save(callback);
//comment4.save(callback);
//comment5.save(callback);

video1.save(callback);
video2.save(callback);
video3.save(callback);
video4.save(callback);
video5.save(callback);
video6.save(callback);
video7.save(callback);

user1.videos.push(video1);
user1.videos.push(video3);
user1.videos.push(video4);
user1.videos.push(video5);

user2.videos.push(video2);
user2.videos.push(video6);
user2.videos.push(video7);


user1.save(callback);
user2.save(callback(closeDB));

function
callback(err, close) {

    if (err) throw err;

    if (close) {
      close();
    }
}


function
closeDB() {
    mongoose.connection.close();
}
