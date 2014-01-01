define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var template = require('text!app/todos/itemtemplate.html')


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
      this.$el.html(this.template(this.model.toJSON()));
      // $(this.el).html(
      //   $('<label class="title">').text(this.model.get('title'))
      //     .append('<button class="delete">Delete</button>')
      // );
      return this;
    },

    template: _.template(template),

    clear: function() {
      this.model.destroy();
    }
  });

});
