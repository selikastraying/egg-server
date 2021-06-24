'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/post', controller.home.post);
  // router.get('/update', controller.home.update);
  // router.get('/delete', controller.home.delete);
  router.resources('posts', '/api/posts', controller.posts);
  router.get('/index', controller.home.index);
};
