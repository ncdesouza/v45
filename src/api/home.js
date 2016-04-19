/**
 * Created by nicholas on 26/01/16.
 */
import Privacy from '../constants/Privacy';
import mongoose from 'mongoose';
const Video = mongoose.model('Video');

import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    Video
      .find({})
      .sort({date: -1})
      .ne('privacy', Privacy['PRIVATE'])
      .populate({
        path: 'author',
        select: '-_id -videos -google -twitter -facebook -password -email',
        model: 'User',
      })
      .populate({
        path: 'comments.author',
        select: '-_id -videos -google -twitter -facebook -password -email',
        model: 'User'
      })
      .exec(function(err, docs) {
        if (err) throw err;
        for(var i = 0; i < docs.length; i++) {
          if(docs[i].author.privacy == Privacy['PRIVATE']) {
            docs.splice(i, 1);
            console.log('found');
          }
        }
        res.json({success: true, msg: 'Trending Videos', data: docs})
      });
  } catch (err) {
    next(err);
  }
});

export default router;
