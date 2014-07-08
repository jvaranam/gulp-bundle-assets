module.exports = {
  bundle: {
    vendor: {
      scripts: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular/angular.js'
      ],
      styles: [
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/bootstrap/dist/css/bootstrap-theme.css'
      ],
      resources: './bower_components/bootstrap/dist/fonts/**/*.*'
    },
    main: {
      scripts: [
        './content/js/one.js',
        './content/js/two.js'
      ],
      styles: './content/**/*.css'
    }
  },
  dest: './public'
};