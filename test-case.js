let chai = require('chai');
let chaiHttp  = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

const { add } = require("../app.js")

describe('Testing  my Rest Api', () => {
    
    it("should add to numbers", ()=>{
        expect(add(1, 2)).eql("3")
    })

    it('should  return status 200 for /',function(done){
        chai
            .request('http://localhost:6500')
            .get('/users')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })

        chai
            .request('http://localhost:6500')
            .post('/users')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })

        chai
            .request('http://localhost:6500')
            .post('/users/praveen')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    });

    it('should  return status 200 for /movies',function(done){
        chai
            .request('http://localhost:6500')
            .get('/movies')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    })
    it('should return the status 404', function(done){
        chai
            .request('http://localhost:6500')
            .get('/movie')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
})