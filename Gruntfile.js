module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json'), 
      clientsSrcPath = 'public/javasclipt/**/*.js',
      serverSrcPath = ['routes/**/*.js', 'models/**/*.js'],
      testSrcPath = 'test/**/*.js',
      defaultTasks = ['jshint', 'mochaTest'];
  
  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coverage/blanket'
        },
        src: [testSrcPath]
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'coverage.html'
        },
        src: [testSrcPath]
      }
    },
    express: {
      options: {
      },
      dev: {
        options: {
          script: 'app.js'
        }
      },
      prod: {
        options: {
          script: 'app.js',
          node_env: 'production'
        }
      }
    },
    watch: {
      express: {
        files:  [ '**/**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          nospawn: true
        }
      },
      src: {
        files: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath],
        tasks: [ 'default' ]
      }
    }
  });

  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', defaultTasks);
};
