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
        // .expect({ name: 'pochi', email: 'hoge@example.com', password: 'credential' })
        .end(function(err, res){
          if (err) throw err;
        });
    });

  });
});
