define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Todos = require('app/todos/collection');
  var TodoView = require('app/todos/view');

  var AppView = Backbone.View.extend({
    el: $('#app'),

    events: {
      'keypress #new-todo': 'keyPress'
    },

    initialize: function() {
      this.collection = new Todos();
      this.collection.bind('add', this.renderOne, this);
      this.collection.bind('reset', this.render, this);
      this.collection.reset(window.todos);
    },

    renderOne: function(todo) {
      var view = new TodoView({model: todo});
      this.$('#list').append(view.render().el);
    },
    
    render: function() {
      this.collection.each(this.renderOne, this);
      return this;
    },

    keyPress: function(e) {
      if(e.keyCode === 13) {
        var input = this.$('#new-todo');
        this.collection.create({title: input.val()});
        input.val('');
      }
    }
  });

  return AppView;
});
