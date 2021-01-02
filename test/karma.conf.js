'karma-chrome-launcher',
module.exports = function(config) {
  'use strict';
  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: [
      'jasmine'
    ],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-pluf/dist/angular-pluf.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/tinycolor/tinycolor.js',
      'bower_components/md-color-picker/dist/mdColorPicker.min.js',
      'bower_components/angular-material-wysiwyg/dist/angular-material-wysiwyg.js',
      'bower_components/tinymce/tinymce.js',
      'bower_components/angular-ui-tinymce/src/tinymce.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src*.js',
      'test/mock*.js',
      'test/spec*.js'
    ],
    exclude: [
    ],
    port: 8080,
    browsers: [
      'PhantomJS'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
