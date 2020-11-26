'use strict';
module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    configureProxies:'grunt-connect-proxy'
  });
  var appConfig = {
    app: require('./bower.json').srcPath || 'src',
    dist: 'dist',
    pkg: require('./bower.json')
  };
  grunt.initConfig({
    yeoman: appConfig,
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/views/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9001,
        hostname: 'localhost',
        livereload: 35729
      },
      proxies: [{
        context: '/', 
        host: '<%= yeoman.pkg.backend.host %>', 
        port: '<%= yeoman.pkg.backend.port %>', 
        changeOrigin: true,
        headers: {
            host: '<%= yeoman.pkg.backend.host %>'
        }
      }],
      livereload: {
        options: {
          open: true,
          middleware: function (connect, options) {
            var middlewares = [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)];
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });
            return middlewares;
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          middleware: function (connect, options) {
            var middlewares = [connect.static(appConfig.dist)];
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });
            return middlewares;
          }
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },
    jsdoc: {
      all: {
        src: ['<%= yeoman.app %>/{,*/}*.js'],
        options: {
          destination: '<%= yeoman.dist %>/doc/jsdoc',
          configure: 'node_modules/angular-jsdoc/common/conf.json',
          template: 'node_modules/angular-jsdoc/angular-template',
          tutorial: 'doc/tutorials',
          readme: 'README.md'
        },
      },
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    wiredep: {
       app: {
         src: ['<%= yeoman.app %>/index.html'],
         ignorePath:  /\.\.\
       },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },
	 cssmin: {
	   dist: {
	     files: {
	       '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.min.css': [
	          '.tmp/styles/{,*/}*.css'
	       ]
	     }	
	   }
	 },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.min.js': [
            '.tmp/{,*/}*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    concat: {
      tmp: {
        src: [
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ],
        dest: '.tmp/<%= yeoman.pkg.name %>.js'
      },
      distcss: {
    	  src: [
           '<%= yeoman.app %>/{,*/}*.css'
          ],
          dest: '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.css'
      },
      dist: {
        src: [
          '.tmp/{,*/}*.js'
        ],
        dest: '<%= yeoman.dist %>/<%= yeoman.pkg.name %>.js'
      }
    },
    htmlmin: {
      dist: {
        options: {
          conservativeCollapse:           true,
          removeCommentsFromCDATA:        true,
          collapseBooleanAttributes:      true,
          collapseWhitespace:             true,
          removeAttributeQuotes:          true,
          removeComments:                 true, 
          removeEmptyAttributes:          true,
          removeRedundantAttributes:      true,
          removeScriptTypeAttributes:     true,
          removeStyleLinkTypeAttributes:  true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    ngtemplates: {
      dist: {
        options: {
          module: '<%= yeoman.pkg.moduleName %>',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: 'views/{,*/}*.html',
        dest: '.tmp/templateCache.js'
      }
    },
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '*.js',
          dest: '.tmp/'
        }]
      }
    },
    copy: {
       dist: {
         files: [{
           expand: true,
           dot: true,
           cwd: '<%= yeoman.app %>',
           dest: '<%= yeoman.dist %>',
           src: [
             '*.{ico,png,txt}',
             'images/{,*/}*.{webp}',
             'styles/fonts/{,*/}*.*'
           ]
         }, {
           expand: true,
           cwd: '.tmp/images',
           dest: '<%= yeoman.dist %>/images',
           src: ['generated}*.css'
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
     concurrent: {
       server: [
         'copy:styles',
       ],
       test: [
         'copy:styles'
       ],
       dist: [
         'copy:styles',
         'concat:tmp',
         'imagemin',
         'svgmin'
       ]
     },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      },
      debug: {
        configFile: 'test/karma.conf.js',
        port: 9999,
        singleRun: false,
        browsers: ['Chrome']
      }
    },
  });
  grunt.registerTask('demo', 'Compile then start a connect web server', function (target) {
	    if (target === 'dist') {
	      return grunt.task.run([
	        'build',
	        'configureProxies:server', 
	        'connect:dist:keepalive'
	      ]);
	    }
	    grunt.task.run([
	      'clean:server',
	      'wiredep',
	      'concurrent:server',
	      'postcss:server',
	      'configureProxies:server', 
	      'connect:livereload',
	      'watch'
	    ]);
	  });
  grunt.registerTask('test', [
    'clean',
    'wiredep',
    'concurrent:test',
    'postcss:server',
    'karma:unit'
  ]);
  grunt.registerTask('debug', [
    'clean',
    'wiredep',
    'concurrent:server',
    'postcss',
    'karma:debug'
  ]);
  grunt.registerTask('build', [
    'wiredep',
    'clean:dist',
    'concurrent:dist',
    'concat:distcss',
    'postcss',
    'ngtemplates',
    'concat:dist',
    'ngAnnotate',
    'copy:dist',
    'uglify',
    'cssmin'
  ]);
  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
