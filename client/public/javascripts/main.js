define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Todo = require('app/todos/model');
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
      this.collection.fetch();
    },

    renderOne: function(todo) {
      var view = new TodoView({model: todo});
      this.$('#list').append(view.render().el);
    },
    
    render: function() {
      Todo.each(this.renderOne);
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
