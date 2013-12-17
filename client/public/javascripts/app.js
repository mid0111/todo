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
    'app': '../javascripts/todos'
  }
});

// Start the main app logic.
requirejs([
  'app/todos',
  'underscore', 
  'jquery', 
  'backbone'], 
function(AppView) {
  var App = new AppView;
});
