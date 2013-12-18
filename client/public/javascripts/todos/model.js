define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // Model
  return Backbone.Model.extend({
    defaults: {
      state: false,
      title: 'タイトルを入力してください',
      createdAt: new Date()
    },

    idAttribute: '_id'
  });

});