/* globals describe before after it */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')
const Gov = require('../models/government_program')

// GET /government-programs
//   ✓ should return a 200 response
//   ✓ should return an array
//   ✓ should return all the records in the database

describe('GET /', () => {
  it('should return a 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

describe('GET /government-programs', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/government-programs')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/government-programs')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/government-programs')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.have.property('name')
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/government-programs')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.have.lengthOf(5)
        done()
      })
  })
})

// POST /government-programs
//   ✓ should return a 200 response
//   ✓ should add a new gov to the database

describe('POST /government-programs', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/government-programs')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should add a gov object to the collection', (done) => {
    api.get('/government-programs')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[response.body.length - 1].name).to.equal('Spring Singapore')
      done()
    })
  })
})

// GET /government-programs/:id
//   ✓ should return a 200 response
//   ✓ should return an object containing the fields "name" and "address"

describe('GET /government-programs/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/government-programs')
      .set('Accept', 'application/json')
      .send({
        'name': 'test gov',
        'address': '122234',
        'description': 'this is a test',
        'website': 'test.com',
        'logo': 'test.png'
      }).end((err, res) => {
        expect(err).to.be.a('null')
        id = res.body._id
        done()
      })
  })
  it('should return a 200 response', (done) => {
    api.get('/government-programs/' + id)
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an object that has the fields "name" and "address"', (done) => {
    api.get('/government-programs/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.government_program).to.have.property('name')
      expect(response.body.government_program).to.have.property('address')
      done()
    })
  })
  after((done) => {
    api.delete('/government-programs/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Gov.findById({_id: id}, function (err, gov) {
          expect(err).to.be.a('null')
          expect(gov).to.be.a('null')
          done()
        })
      })
  })
})

// PUT /government-programs/:id
//   ✓ should return a 200 response
//   ✓ should update a gov document

describe('PUT /government-programs/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/government-programs')
      .set('Accept', 'application/json')
      .send({
        'name': 'test gov',
        'address': '122234',
        'description': 'this is a test',
        'website': 'test.com',
        'logo': 'test.png'
      }).end((err, res) => {
        expect(err).to.be.a('null')
        id = res.body._id
        done()
      })
  })
  it('should return a 200 response', (done) => {
    api.put('/government-programs/' + id)
    .set('Accept', 'application/json')
    .send({
      'address': '1 Good Evening Street, Singapore'
    })
    .expect(200, done)
  })
  it('should update a gov document', (done) => {
    api.get('/government-programs/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.government_program.address).to.equal('1 Good Evening Street, Singapore')
      done()
    })
  })
  after((done) => {
    api.delete('/government-programs/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Gov.findById({_id: id}, function (err, gov) {
          expect(err).to.be.a('null')
          expect(gov).to.be.a('null')
          done()
        })
      })
  })
})

// DELETE /government-programs/:id
//   ✓ should remove an gov document

describe('DELETE /government-programs/:id', () => {
  var id
  before((done) => {
    api.post('/government-programs')
      .set('Accept', 'application/json')
      .send({
        'name': 'test gov',
        'address': '122234',
        'description': 'this is a test',
        'website': 'test.com',
        'logo': 'test.png'
      }).end((err, res) => {
        expect(err).to.be.a('null')
        id = res.body._id
        done()
      })
  })
  it('should remove a gov document', (done) => {
    api.delete('/government-programs/' + id)
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        Gov.findById({_id: id}, function (err, gov) {
          expect(err).to.be.a('null')
          expect(gov).to.be.a('null')
          done()
        })
      })
  })
})
