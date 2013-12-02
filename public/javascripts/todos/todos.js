define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // Model
  var Todo = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });

  // Collection
  var TodoCollection = Backbone.Collection.extend({
    model: Todo,

    url: '/todos'
  });
  var Todos = new TodoCollection;

  // View
  var TodoView = Backbone.View.extend({
    tagName: 'li',

    className: 'todo-item',

    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },

    render: function() {
      $(this.el).html(
        $('<label class="title">').text(this.model.get('title'))
      );
      return this;
    },

    clear: function() {
      this.model.destroy();
    }
  });

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