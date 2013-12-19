define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Todo = require('app/todos/model');
  var Todos = require('app/todos/collection');

  describe('Todo Collection', function() {

    before(function() {
      this.todos = new Todos();
    });

    after(function() {
      this.todos = null;
    });

    describe('コレクション作成', function() {
    });

    describe('コレクションにModel追加', function() {
    });

    describe('コレクションからModel削除', function() {
    });
  });

});