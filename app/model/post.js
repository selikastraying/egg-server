'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const PostSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
  });
  return mongoose.model('Post', PostSchema, 'post');
};
