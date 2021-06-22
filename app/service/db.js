'use strict';

const Service = require('egg').Service;
class DbService extends Service {
  async find() {
    const post = await this.ctx.model.Post.find({});
    return post;
  }
  async insert(newPost) {
    const data = new this.ctx.model.Post({
      title: newPost.title,
      content: newPost.content,
    });
    const result = await data.save();
    if (result) {
      console.log(result);
    }
    return 'sucess';
  }
  async update(newPost) {
    await this.ctx.model.Post.updateOne({
      _id: newPost._id,
    }, {
      title: newPost.title,
      content: newPost.content,
    }, (err, result) => {
      if (result) {
        return 'sucess';
      }
    });
  }
  async delete(_id) {
    await this.ctx.model.Post.deleteOne({
      _id,
    });
    return 'sucess';
  }
}

module.exports = DbService;
