define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Todo = require('app/todos/model');

  // Model
  var Todo = Backbone.Model.extend({
    defaults: {
      title: ''
    },

    idAttribute: '_id'
  });

  // Collection
  var TodoCollection = Backbone.Collection.extend({
    model: Todo,

    url: '/todos'
  });
  return new TodoCollection;

});