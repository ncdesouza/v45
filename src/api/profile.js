/**
 * Created by nicholas on 26/01/16.
 */
import mongoose from 'mongoose';
const Video = mongoose.model('Video');
const User = mongoose.model('User');

import { Router } from 'express';

const router = new Router();

router.get('/:username', async (req, res, next) => {
  try {
    console.log(req.params.username);
    User
      .findOne({ username: req.params.username }, (err, user) => {
        if (err) {
          console.log('err1');
          return res.json({
            success: false,
            msg: 'user not found',
            data: null
          });
        }
        Video
          .find({ author : user._id })
          .sort({date: -1})
          .populate({
            path: 'author',
            select: '-_id -videos -google -twitter -facebook -password -email',
            model: 'User'
          })
          .populate({
            path: 'comments.author',
            select: '-_id -videos -google -twitter -facebook -password -email',
            model: 'User'
          })
          .exec(function(err, doc) {
            if (err) {
              console.log('err2');
              return res.json({
                success: false,
                msg: 'Error finding videos',
                data: null
              });
            }
            res.json({
              success: true,
              msg: user.username,
              data: {
                videos: doc,
                user: user
              }})
          });
      })
  } catch (err) {
    next(err);
  }
});

router.post('/settings/privacy', async (req, res, next) => {
  console.log(req.body);
  try {
    User.findOne({ username:  req.body.username }, (err, user) => {
      if (err) return res.json({ success: false });
      user.privacy = req.body.value
      user.save(function(err) {
        if (err) return res.json({ success: false });
        return res.json({success: true});
      })
    })
  } catch (err) {
    next(err);
  }
});

export default router;
