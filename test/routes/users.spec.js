var request = require('supertest'),
    should = require('should'),
    app = require('../../app'),
    User = require('../../models/user');

var clearData = function(done) {
  User.remove(done);
};

describe('/users', function(){
  
  beforeEach(function(done) {
    clearData(done);
  });

  afterEach(function(done) {
    clearData(done);
  });

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
        .set('Content-Type', 'application/text')
        .expect(400)
        .end(function(err, res){
          if (err) throw err;
        });
    });

    it('登録済みのnameを指定した場合409が返却されること', function(done){
      request(app)
        .post('/users')
        .send({ name: 'pochi', email: 'hoge@example.com', password: 'credential' })
        .expect(201)
        .end(function(err, res){
          if (err) throw err;
          
          // 同一nameで登録
          request(app)
            .post('/users')
            .send({ name: 'pochi', email: 'fuga@example.com', password: 'credential' })
            .expect(409)
            .end(function(err, res){
              if (err) throw err;
              done();
            });
        });
    });

    it('登録済みのemailを指定した場合409が返却されること', function(done){
      request(app)
        .post('/users')
        .send({ name: 'tama', email: 'hoge@example.com', password: 'credential' })
        .expect(201)
        .end(function(err, res){
          if (err) throw err;
          
          // 同一emailで登録
          request(app)
            .post('/users')
            .send({ name: 'tamya', email: 'hoge@example.com', password: 'credential' })
            .expect(409)
            .end(function(err, res){
              if (err) throw err;
              done();
            });
        });
    });

    it('nameを省略した場合400が返却されること', function(){
      request(app)
        .post('/users')
        .send('{ email: "hoge@example.com", password: "credential" }')
        .expect(400)
        .end(function(err, res){
          if (err) throw err;
        });
    });

    it('nameに空文字を指定した場合400が返却されること', function(){
      request(app)
        .post('/users')
        .send('{ name: "", email: "hoge@example.com", password: "credential" }')
        .expect(400)
        .end(function(err, res){
          if (err) throw err;
        });
    });

    it('emailを省略した場合400が返却されること', function(){
      request(app)
        .post('/users')
        .send('{ name: "hoge", password: "credential" }')
        .expect(400)
        .end(function(err, res){
          if (err) throw err;
        });
    });

    it('emailに空文字を指定した場合400が返却されること', function(){
      request(app)
        .post('/users')
        .send('{ name: "hoge", email: "", password: "credential" }')
        .expect(400)
        .end(function(err, res){
          if (err) throw err;
        });
    });

  });
});
