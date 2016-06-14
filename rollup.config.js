import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

var pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [babel(babelrc())],
  targets: [
    {
      dest: pkg['main'],
      format: 'cjs'
    },
    {
      dest: pkg['jsnext:main'],
      format: 'es6'
    }
  ]
};
