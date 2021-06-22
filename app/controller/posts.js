'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async index() {
    const { ctx } = this;
    const posts = await ctx.service.db.find();
    ctx.body = posts;
  }
  async create() {
    const { ctx } = this;
    const result = await ctx.service.db.insert({ title: ctx.request.body.title, content: ctx.request.body.content });
    ctx.body = result;
  }
  async update() {
    const { ctx } = this;
    const result = await ctx.service.db.update({ _id: ctx.params.id, title: ctx.request.body.title, content: ctx.request.body.content });
    ctx.body = result;
  }
  async destroy() {
    const { ctx } = this;
    const result = await ctx.service.db.delete({ _id: ctx.params.id });
    ctx.body = result;
  }
}

module.exports = PostsController;
