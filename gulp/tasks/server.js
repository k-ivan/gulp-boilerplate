const server = require('browser-sync').create();
const config = require('../config');

module.exports = function(gulp, $, config) {
  return function () {
    server.init({
      server: {
        baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
        directory: false,
        serveStaticOptions: {
          extensions: ['html']
        }
      },
      files: [
        `${config.dest.html}/*.html`,
        `${config.dest.css}/*.css`,
        `${config.dest.js}/*.js`,
        `${config.dest.img}/**/*`
      ],
      port: $.util.env.port || config.port,
      logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
      logConnections: false,
      logFileChanges: true,
      open: true,
      notify: true,
      ghostMode: false,
      online: Boolean($.util.env.tunnel),
      tunnel: $.util.env.tunnel || null
    });
    return server;
  }
}
