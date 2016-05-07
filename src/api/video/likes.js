
import mongoose from 'mongoose'
const Video = mongoose.model('Video');

import { Router } from 'express';
const router = new Router();

router.post('/like', async (req, res, next) => {
  let videoId = req.body.videoId;
  let userId = req.body.userId;
  try {
    Video.findById(videoId, (video) => {
      video.likes.push(userId);
      res.status(200).json({success:true});
    })
  } catch (err) {
    res.status(204).json({success: false});
  }
});

router.post('/unlike', async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});

export default router;
