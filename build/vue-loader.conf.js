'use strict'
const utils = require('./utils')
const config = require('../config')
const px2rem = require('postcss-plugin-px2rem');
const isProduction = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');
const sourceMapEnabled = isProduction ?
    config.build.productionSourceMap :
    config.dev.cssSourceMap

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    // function() {
    //   return [px2rem({remUnit: 75})];
    // },
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    postcss: [
        autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.1']
        }),
        px2rem({rootValue: 75})
    ]
}
