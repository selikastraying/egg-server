/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624246567266_6902';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mongoose = {
    client: {
      // url: 'mongodb://mongodb/local',
      url: 'mongodb://127.0.0.1/local',
      options: { useUnifiedTopology: true },
    },
  };

  config.view = {
    mapping: {
      '.html': 'nunjucks',
      // '.js': 'assets',
    },
  };

  // config.assets = {
  //   devServer: {
  //     debug: true,
  //     command: 'roadhog dev',
  //     port: 8000,
  //     env: {
  //       APP_ROOT: `${appInfo.baseDir}/app/web`,
  //       BROWSER: 'none',
  //       ESLINT: 'none',
  //       SOCKET_SERVER: 'http://127.0.0.1:8000',
  //       PUBLIC_PATH: 'http://127.0.0.1:8000',
  //     },
  //   },
  // };

  config.static = {
    prefix: '/',
    dir: [
      `${appInfo.baseDir}/app/view`,
    ],
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
