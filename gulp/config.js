const util = require('gulp-util');

let production = util.env.production || util.env.prod || false;

const srcPath  = 'src';
const destPath = 'dist';

const config = {

  env: 'development',
  production: production,

  src: {
    root    : `${srcPath}`,
    sass    : `${srcPath}/scss`,
    js      : `${srcPath}/js`,
    img     : `${srcPath}/img`,
    iconsSvg: `${srcPath}/icons`,
    fonts   : `${srcPath}/fonts`,
    html    : `${srcPath}/templates`,
    vendor  : `${srcPath}/vendor`
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
