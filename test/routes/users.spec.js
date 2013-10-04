var request = require('supertest'),
    app = require('../../app');

describe('/users', function(){

  describe('POST', function(){

    it('201が返却されること', function(){
      request(app)
        .post('/users')
        .send({ email: 'hoge@example.com', password: 'credential' })
        .expect(201)
        .end(function(err, res){
          if (err) throw err;
        });
    });

  });
});
