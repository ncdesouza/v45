
//import mongoose from 'mongoose'
import Busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

//const Video = mongoose.model('Video');

import { Router } from 'express';


const router = new Router();
const upload = multer({
  dest: 'public/',
  rename: function(fieldname, filename) {
    return filename + '.mp4';
  }
});
router.post('/upload', upload.single('video'), async (req, res, next) => {
  try {
    console.log(req.file);
    res.json({success:true});
    //var busboy = new Busboy({headers: req.headers});
    //
    //busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    //  console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
    //  file.pipe(fs.createWriteStream(path.join('public')))
    //});
    //
    //busboy.on('finish', function () {
    //  console.log('Done parsing form!');
    //  res.status(200).json({success: true});
    //});
    //
    //req.pipe(busboy);


  } catch (err) {
    res.status(204).json({success: false});
  }
});

router.get('/', async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
});

export default router;
