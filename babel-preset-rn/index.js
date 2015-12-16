module.exports = {
  plugins: [
    require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-syntax-trailing-function-commas'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-transform-es2015-classes'),
    require('babel-plugin-transform-es2015-computed-properties'),
    require('babel-plugin-transform-es2015-constants'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-for-of'),
    [ require('babel-plugin-transform-es2015-modules-commonjs'), { strict: false, allowTopLevelThis: true } ],
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-transform-object-assign'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-react-display-name'),
    require('babel-plugin-transform-react-jsx'),
    require('babel-plugin-transform-regenerator')
  ]
}