'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const posts = await ctx.service.db.find();
    ctx.body = posts;
  }
  async post() {
    const { ctx } = this;
    const result = await ctx.service.db.insert({ title: ctx.request.query.title, content: ctx.request.query.content });
    ctx.body = result;
  }
  async update() {
    const { ctx } = this;
    const result = await ctx.service.db.update({ _id: ctx.request.query._id, title: ctx.request.query.title, content: ctx.request.query.content });
    ctx.body = result;
  }
  async delete() {
    const { ctx } = this;
    const result = await ctx.service.db.delete({ _id: ctx.request.query._id });
    ctx.body = result;
  }
}

module.exports = HomeController;
