var should = require('should'),
    User = require('../../models/user');

describe('UserModel', function() {

  describe('インスタンス生成', function() {

    it('指定した属性でインスタンスを生成できること', function() {
      var user = new User({
        name: 'pochi',
        email: 'hoge@example.com',
        password: 'pass'
      });
      user.id.length.should.not.be.equal(0);
      user.name.should.equal('pochi');
      user.email.should.equal('hoge@example.com');
      user.password.should.equal('pass');
    });

  });

});