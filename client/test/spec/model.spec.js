define(function(require) {
  var Todo = require('app/todos/model');

  describe('Todo Model', function() {
    describe('インスタンス作成', function() {
      it('デフォルト値が設定されること', function() {
        var todo = new Todo();
        expect(todo).to.exist;
        expect(todo.get('title')).to.be.a('string')
          .and.to.equal('タイトルを入力してください');
        expect(todo.get('state')).to.be.a('boolean')
          .and.to.be.false;
        expect(todo.get('createdAt')).to.be.a('Date');
      });

      it('すべてのプロパティを設定できること', function() {
        var now = new Date();
        var todo = new Todo({
          title: 'Test Title',
          state: true,
          createdAt: now
        });
        expect(todo).to.exist;
        expect(todo.get('title')).to.be.a('string')
          .and.to.equal('Test Title');
        expect(todo.get('state')).to.be.a('boolean')
          .and.to.be.true;
        expect(todo.get('createdAt')).to.be.a('Date')
          .and.to.equal(now);
      });

      it('titleのみを設定した場合指定値及びデフォルト値が設定されること', function() {
        var todo = new Todo({
          title: 'Test Title'
        });
        expect(todo).to.exist;
        expect(todo.get('title')).to.be.a('string')
          .and.to.equal('Test Title');
        expect(todo.get('state')).to.be.a('boolean')
          .and.to.be.false;
        expect(todo.get('createdAt')).to.be.a('Date');
      });

      it('stateのみを設定した場合指定値及びデフォルト値が設定されること', function() {
        var todo = new Todo({
          state: true
        });
        expect(todo).to.exist;
        expect(todo.get('title')).to.be.a('string')
          .and.to.equal('タイトルを入力してください');
        expect(todo.get('state')).to.be.a('boolean')
          .and.to.be.true;
        expect(todo.get('createdAt')).to.be.a('Date');
      });

      it('createdAtのみを設定した場合指定値及びデフォルト値が設定されること', function() {
        var now = new Date();
        var todo = new Todo({
          createdAt: now
        });
        expect(todo).to.exist;
        expect(todo.get('title')).to.be.a('string')
          .and.to.equal('タイトルを入力してください');
        expect(todo.get('state')).to.be.a('boolean')
          .and.to.be.false;
        expect(todo.get('createdAt')).to.be.a('Date')
          .and.to.equal(now);
      });
    });
  });

});
