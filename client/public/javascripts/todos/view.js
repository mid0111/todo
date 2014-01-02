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
      'click button.delete': 'clear',
      'dblclick .title': 'editing',
      'keypress input': 'keyPress'
    },

    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    template: _.template(template),

    clear: function() {
      this.model.destroy();
    },

    editing: function(e) {
      e.preventDefault();
      this.$el.addClass('editing');
    },

    keyPress: function(e) {
      if(e.keyCode === 13) {
        e.preventDefault();
        this.$el.removeClass('editing');
        this.model.save({title: this.$('input').val()});
      }
    }

  });

});
