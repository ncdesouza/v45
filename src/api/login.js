
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'
const User = mongoose.model('User');

import { Router } from 'express';

const router = new Router();

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    User.findOne({$or: [{ email: req.body.email }, { username: req.body.email }]}, (err, user) => {
      //if error
      if (err) {
        return res.status(500).send({
          success: false,
          message: 'Server Error',
          token: null
        });
      }

      // if user not found or invalid password
      if (!user || !user.validPassword(req.body.password)) {
        return res.status(401).json({
          success: false,
          message: 'Username or password is incorrect',
          token: null
        });
      }

      // success: create token and send to client
      var payload = {
        username: user.username,
        id: user._id,
        profilePic: user.profilePic
      };
      var token = jwt.sign(payload, 'video45rocks', {expiresIn: 86400});
      return res.status(200).json({
        success: true,
        message: 'Welcome to video45',
        token: token,
        user: {
          username: user.username,
          id: user._id,
          profilePic: user.profilePic,
        }
      });
    })
  } catch (err) {
    next(err);
  }
});

export default router;
