define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // Model
  return Backbone.Model.extend({
    defaults: {
      title: ''
    },

    idAttribute: '_id'
  });

});