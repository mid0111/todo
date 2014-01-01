define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var TodoView = require('app/todos/view');

  describe('App.View.Todo', function() {

    before(function() {
      // Create test fixture.
      this.$fixture = $('<div id = "todo-view-fixture"></div>');
    });

    beforeEach(function() {
      // Empty out and rebind the fixture.
      this.$fixture.empty().appendTo('#fixtures');

      // New default model and view for each test.
      this .view = new TodoView();
    });

    afterEach(function() {
      this.view.model.destroy();
    });

    after(function() {
      // Remove all subfixtures after test suite finishes.
      $('#fixtures').empty();
    });

    describe('Todo View', function() {
      it("can render an empty note");
    });
  });

});
