/* globals describe it */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')

// POST /signup
describe('POST /signup', function () {
  this.timeout(10000)
  it('should add a user and return it', (done) => {
    api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        'name': 'founder',
        'email': 'founder@gmail.com',
        'password': '123456'
      }).end((error, response) => {
        expect(error).to.be.a('null')
        done()
      })
  })
  it('should return a 401 error if signup is unsuccessful', (done) => {
    api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        'name': 'Milik',
        'email': 'thebuild@isgreen.io'
      })
      .expect(401, done)
  })
})

// POST /signin
describe('POST /signin', function () {
  this.timeout(10000)
  it('should return user name', (done) => {
    api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        'email': 'founder@gmail.com',
        'password': '123456'
      })
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body.message).to.equal('Sign in successful! Welcome: founder')
        done()
      })
  })
  it('should return a 401 error if signin is unsuccessful', (done) => {
    api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        'email': 'xxx@yzz.com',
        'password': '123456'
      })
      .expect(401, done)
  })
  it('should return another 401 error if password is incorrect', (done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': 'founder@gmail.com',
      'password': '13212412'
    })
    .expect(401, done)
  })
})
