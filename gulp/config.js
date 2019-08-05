const util = require('gulp-util');

let production = (process.env.NODE_ENV === 'production') ? true : false;
const srcPath  = 'src';
const destPath = 'dist';

const config = {

  env: 'development',
  port: 8080,
  production: production,

  src: {
    root    : `${srcPath}`,
    html    : `${srcPath}/templates`,
    sass    : `${srcPath}/scss`,
    js      : `${srcPath}/js`,
    img     : `${srcPath}/img`,
    iconsSvg: `${srcPath}/icons`,
    fonts   : `${srcPath}/fonts`,
    media   : `${srcPath}/media`
  },
  dest: {
    root  : destPath,
    html  : destPath,
    css   : `${destPath}/css`,
    js    : `${destPath}/js`,
    img   : `${destPath}/img`,
    icons : `${destPath}/img`,
    fonts : `${destPath}/fonts`,
    media : `${destPath}/media`
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
      (this.env === 'development')
        ? util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
        : util.colors.black.bgGreen(' ' + process.env.NODE_ENV + ' ') //bgGreen(' ' + process.env.NODE_ENV + ' ')
    );
  }
}

config.setEnv(production ? 'production' : 'development');

module.exports = config;
