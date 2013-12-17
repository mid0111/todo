define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Todo = require('app/todos/model');
  var Todos = require('app/todos/collection');

  // View
  return Backbone.View.extend({
    tagName: 'li',

    className: 'todo-item',

    events: {
      'click button.delete': 'clear'
    },

    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    render: function() {
      $(this.el).html(
        $('<label class="title">').text(this.model.get('title'))
          .append('<button class="delete">Delte</button>')
      );
      return this;
    },

    clear: function() {
      this.model.destroy();
    }
  });

});