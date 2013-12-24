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
      it('デフォルト値が設定されること', function() {
        expect(this.todos).to.be.ok;
        expect(this.todos).to.have.length(0);
      });

      it('fetch後に空コレクションが空になること');
      // it('fetch後に空コレクションが空になること', function(done) {
      //   var todos = new Todos();
      //   todos.once('reset', function() {
      //     expect(todos).to.have.length(0);
      //     done();
      //   });
      //   todos.fetch();
      // });
    });

    describe('コレクション修正', function() {

      beforeEach(function() {
        this.todos.create({
          state: true,
          title: 'Sample Test'
        });
      });

      afterEach(function() {
        // Todo: DB削除的な
        this.todos.reset();
      });

      it('Modelを1つ持っていること');
      // it('Modelを1つ持っていること', function(done) {
      //   var todos = this.todos;
        
      //   // After featch
      //   todos.once('reset', function() {
      //     expect(todos).to.have.length(1);

      //     var todo = todos.at(0);
      //     expect(todo).to.be.ok;
      //     expect(todo.get('title')).to.equal('Sample Test');
      //     expect(todo.get('state')).to.be.true;
      //     expect(todo.get('createdAt')).to.be.a('Date');
          
      //     done();
      //   });

      //   todos.fetch();
      // });

      it('コレクションからModelを削除できること');
      // it('コレクションからModelを削除できること', function(done) {
      //   var todos = this.todos;

      //   // After shift
      //   todos.once('remove', function() {
      //     expect(todos).to.have.length(0);
      //     done();
      //   });

      //   var todo = todos.shift();
      //   expect(todo).to.be.ok;
      // });

      it('Modelを2つ目を追加できること');

    });

  });

});