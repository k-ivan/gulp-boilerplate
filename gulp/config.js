const util = require('gulp-util');

let production = util.env.production || util.env.prod || false;

const destPath = 'dist';

const config = {

  env: 'development',
  production: production,

  src: {
    root    : 'src',
    sass    : 'src/sass',
    js      : 'src/js',
    img     : 'src/img',
    iconsSvg: 'src/icons',
    fonts   : 'src/fonts',
    html    : 'src/templates',
    vendor  : 'src/vendor'
  },
  dest: {
    root  : destPath,
    html  : destPath,
    css   : `${destPath}/css`,
    js    : `${destPath}/js`,
    img   : `${destPath}/img`,
    icons : `${destPath}/img`,
    fonts : `${destPath}/fonts`,
    vendor: `${destPath}/vendor`,
  },

  setEnv (env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv () {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  }
}

config.setEnv(production ? 'production' : 'development');

module.exports = config;
