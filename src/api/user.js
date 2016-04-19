
import mongoose from 'mongoose'
const User = mongoose.model('User');

import { Router } from 'express';

const router = new Router();

router.post('/following/add', async (req, res, next) => {
  try {
    console.log(req.body);
    // find me
    User.findOne({ _id: req.body.myId }, (err, me) => {
      if (err || me == null) {
        return res.status(500).send({
          success: false,
          message: 'Server Error',
        });
      }
      // find them
      User.findOne({ _id: req.body.theirId }, (err, them) => {

        if (err || me == null) {
          return res.status(500).send({
            success: false,
            message: 'Server Error',
          });
        }

        // add them to my following list
        me.followUser(them._id, (err) => {
          if (err) {
            return res.status(500).send({
              success: false,
              message: 'Server Error',
            });
          }

          // add me to their followers list
          them.newFollower(me._id, (err) => {
            if (err) {
              return res.status(500).send({
                success: false,
                message: 'Server Error',
              });
            }

            // send all good response
            return res.status(200).json({
              success: true,
              message: 'Following User',
            });
          })
        })
      })
    })
  } catch (err) {
    next(err);
  }
});

router.post('/following/remove', async (req, res, next) => {
  try {
    console.log(req.body);
    
    User.update({
      '_id': req.body.myId },
      { '$pullAll': { 'following': [req.body.theirId] } },
      (err, doc) => {
        if (err) throw err;
        console.log(doc)
        User.update( {'_id': req.body.theirId },
          { '$pullAll': { 'followers': [req.body.myId] }
          }
        , (err, doc) => {
            if (err) throw err;
            console.log(doc);
            res.status(200).json({
              success: true,
              message: 'unFollowed user',
            });
          })
      }
    );



    // find me
    // User.findOne({ _id: req.body.myId }, (err, me) => {
    //   if (err || me == null) {
    //     return res.status(500).send({
    //       success: false,
    //       message: 'Server Error',
    //     });
    //   }
    //   // find them
    //   User.findOne({ _id: req.body.theirId }, (err, them) => {
    //
    //     if (err || me == null) {
    //       return res.status(500).send({
    //         success: false,
    //         message: 'Server Error',
    //       });
    //     }
    //
    //     // remove them from my following list
    //     me.unFollowUser(them._id, (err, del) => {
    //       if (err) {
    //         return res.status(500).send({
    //           success: false,
    //           message: 'Server Error',
    //         });
    //       }
    //
    //       // remove me from their followers list
    //       them.removeFollower(me._id, (err, del) => {
    //         if (err) {
    //           return res.status(500).send({
    //             success: false,
    //             message: 'Server Error',
    //           });
    //         }
    //
    //         // send all good response
    //         return res.status(200).json({
    //           success: true,
    //           message: 'Following User',
    //         });
    //       })
    //     })
    //   })
    // })
  } catch (err) {
    next(err);
  }
});
export default router;
