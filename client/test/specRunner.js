requirejs.config({
  baseUrl: '../public/components',
  shim: {
    'mocha': {
      exports: 'mocha'
    },
    'chai': {
      exports: 'chai'
    },
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'chai-jquery': ['jquery', 'chai']
  },
  
  paths: {
    'mocha':        '../../../node_modules/mocha/mocha',
    'chai':         '../../../node_modules/chai/chai',
    'chai-jquery':  '../../../node_modules/chai-jquery/chai-jquery',
    'jquery':       'jquery/jquery',
    'underscore':   'underscore/underscore',
    'backbone':     'backbone/backbone',
    'app':          '../javascripts/todos'
  }
});

requirejs([
  'require',
  'mocha',
  'chai',
  'chai-jquery'
], function(require, mocha, chai, chaiJquery) {

  // setup mocha
  mocha.expect = chai.expect;
  chai.use(chaiJquery);
  mocha.setup('bdd');

  // switch runner
  var runner = mocha;

  require([
    'app/todos'
  ], function(require) {
    runner.run();
  });

});
