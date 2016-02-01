/**
 * Created by nicholas on 31/01/16.
 */

import mongoose from 'mongoose'
const Video = mongoose.model('Video');

import { Router } from 'express';

const router = new Router();

router.post('/new', async (req, res, next) => {
  try {
    Video.findById( req.body.videoId, (err, video) => {
      if (err) return res.json({ success: false });
      video.newComment(req.body.userId, req.body.comment, (err) => {
        if (err) return res.json({ success: false });
        console.log('posted data');
        return res.json({ success: true });
      })
    })
  } catch (err) {
    next(err);
  }
});

export default router;
