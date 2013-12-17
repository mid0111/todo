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
      Todos.bind('add', this.add, this);
      Todos.bind('reset', this.addAll, this);
      Todos.fetch();
    },

    add: function(todo) {
      var view = new TodoView({model: todo});
      this.$('#list').append(view.render().el);
    },
    
    addAll: function() {
      Todo.each(this.add);
    },

    keyPress: function(e) {
      if(e.keyCode === 13) {
        var input = this.$('#new-todo');
        Todos.create({title: input.val()});
        input.val('');
      }
    }
  });

  return AppView;
});