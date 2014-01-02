requirejs.config({
  baseUrl: 'components',
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },

  paths: {
    'jquery':        'jquery/jquery',
    'underscore':    'underscore/underscore',
    'backbone':      'backbone/backbone',
    'text':          'requirejs-text/text',
    'app':           '../javascripts'
  }
});

// Start the main app logic.
requirejs([
  'app/main',
  'underscore', 
  'jquery', 
  'backbone'], 
function(AppView) {
  var App = new AppView;
});
