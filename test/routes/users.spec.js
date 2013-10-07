var request = require('supertest'),
    should = require('should'),
    app = require('../../app');

describe('/users', function(){

  describe('POST', function(){

    it('201が返却されること', function(){
      request(app)
        .post('/users')
        .send({ name: 'pochi', email: 'hoge@example.com', password: 'credential' })
        .expect(201)
        .end(function(err, res){
          if (err) throw err;
          res.body.name.should.equal('pochi');
          res.body.email.should.equal('hoge@example.com');
          res.body.password.should.equal('credential');
          res.body._id.length.should.not.be.equal(0);
        });
    });

    it('不正なContentTypeを指定した場合400が返却されること', function(){
      request(app)
        .post('/users')
        .send('{ name: "pochi", email: "hoge@example.com", password: "credential" }')
        .expect(400);
    });

  });
});
