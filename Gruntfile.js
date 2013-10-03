module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json'), 
      clientsSrcPath = 'public/javasclipt/**/*.js',
      serverSrcPath = 'routes/**/*.js',
      testSrcPath = 'test/**/*.js',
      gruntTasks = ['jshint', 'mochaTest'];
  

  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          // Require blanket wrapper here to instrument other required
          // files on the fly. 
          //
          // NB. We cannot require blanket directly as it
          // detects that we are not running mocha cli and loads differently.
          //
          // NNB. As mocha is 'clever' enough to only run the tests once for
          // each file the following coverage task does not actually run any
          // tests which is why the coverage instrumentation has to be done here
          require: 'coverage/blanket'
        },
        src: [testSrcPath]
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          // use the quiet flag to suppress the mocha console output
          quiet: true,
          // specify a destination file to capture the mocha
          // output (the quiet option does not suppress this)
          captureFile: 'coverage.html'
        },
        src: [testSrcPath]
      }
    },
    watch: {
      files: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath],
      tasks: gruntTasks
    }
  });

  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', gruntTasks);
};
