module.exports = function(grunt) {

  var clientsSrcPath = 'client/public/javasclipt/**/*.js',
      serverSrcPath = ['server/routes/**/*.js', 'server/models/**/*.js'],
      serverSpec = 'server/test/**/*.js',
      clientSpec = 'client/test/**/*.js',
      defaultTasks = ['jshint', 'mochaTest', 'mocha_phantomjs'];
  
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', clientsSrcPath, serverSrcPath]
    },
    mocha_phantomjs: {
      all: ['client/test/**/*.html']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coverage/blanket'
        },
        src: [serverSpec]
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'coverage.html'
        },
        src: [serverSpec]
      }
    },
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'server/app.js'
        }
      },
      prod: {
        options: {
          script: 'server/app.js',
          node_env: 'production'
        }
      }
    },
    watch: {
      express: {
        files:  [clientsSrcPath, serverSrcPath],
        tasks:  ['express:dev'],
        options: {
          nospawn: true
        }
      },
      src: {
        files: ['Gruntfile.js', clientsSrcPath, serverSrcPath, serverSpec, clientSpec],
        tasks: ['default']
      }
    }
  });

  var pkg = grunt.file.readJSON('package.json'), 
      taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', defaultTasks);
};
