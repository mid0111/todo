module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json'), 
      clientsSrcPath = 'client/js/**/*.js',
      serverSrcPath = 'server/**/*.js',
      testSrcPath = 'server/test/**/*.js';
  

  grunt.initConfig({

    jshint: {
      all: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: [testSrcPath]
      }
    },
    watch: {
      files: ['Gruntfile.js', clientsSrcPath, serverSrcPath, testSrcPath],
      tasks: ['jshint']
    }
  });

  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('default', ['jshint', 'mochaTest', 'watch']);
};
