/**
 * Created by nicholas on 26/01/16.
 */
import mongoose from 'mongoose';
const Video = mongoose.model('Video');

import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    Video
      .find({})
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
      if (err) throw err;
      res.json({success: true, msg: 'Trending Videos', data: doc})
    });
  } catch (err) {
    next(err);
  }
});

export default router;
