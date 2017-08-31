
module.exports= function(grunt){ 
 require('time-grunt')(grunt, (stats, done) => {
  // do whatever you want with the stats
  //uploadReport(stats);

  // be sure to let grunt know when to exit
  done();
});
   require('jit-grunt')(grunt);


  grunt.initConfig({
  cssnano: {
    options: {
      sourcemap: true
    },
    dist: {
      files: [{
          src: 'src/*.css',
          dest: 'dist/cssnano.css',
      }]
    },
  },

    cwebp: {
      dynamic: {
        options: {
          q: 50
        },
        files: [{
          expand: true,
          cwd: 'images/', 
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      },
    },
});

grunt.registerTask('build',['cssnano','cwebp']);
};

