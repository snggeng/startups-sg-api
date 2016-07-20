/* globals describe before after it */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')
const Inc = require('../models/incubator_accelerator')

// GET /incubator_accelerators
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

describe('GET /incubator-accelerators', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/incubator-accelerators')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/incubator-accelerators')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/incubator-accelerators')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.have.property('name')
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/incubator-accelerators')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.have.lengthOf(4)
        done()
      })
  })
})

// POST /incubator-accelerators
//   ✓ should return a 200 response
//   ✓ should add a new investor to the database

describe('POST /incubator-accelerators', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/incubator-accelerators')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should add a investor object to the collection', (done) => {
    api.get('/incubator-accelerators')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[response.body.length - 1].name).to.equal('CAP Vista')
      done()
    })
  })
})

// GET /incubator-accelerators/:id
//   ✓ should return a 200 response
//   ✓ should return an object containing the fields "name" and "address"

describe('GET /incubator-accelerators/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/incubator-accelerators')
      .set('Accept', 'application/json')
      .send({
        'name': 'test incubator_accelerator',
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
    api.get('/incubator-accelerators/' + id)
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an object that has the fields "name" and "address"', (done) => {
    api.get('/incubator-accelerators/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.incubator_accelerator).to.have.property('name')
      expect(response.body.incubator_accelerator).to.have.property('address')
      done()
    })
  })
  after((done) => {
    api.delete('/incubator-accelerators/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Inc.findById({_id: id}, function (err, inc) {
          expect(err).to.be.a('null')
          expect(inc).to.be.a('null')
          done()
        })
      })
  })
})

// PUT /incubator-accelerators/:id
//   ✓ should return a 200 response
//   ✓ should update a investor document

describe('PUT /incubator-accelerators/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/incubator-accelerators')
      .set('Accept', 'application/json')
      .send({
        'name': 'test incubator_accelerator',
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
    api.put('/incubator-accelerators/' + id)
    .set('Accept', 'application/json')
    .send({
      'address': '1 Good Evening Street, Singapore'
    })
    .expect(200, done)
  })
  it('should update a investor document', (done) => {
    api.get('/incubator-accelerators/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.incubator_accelerator.address).to.equal('1 Good Evening Street, Singapore')
      done()
    })
  })
  after((done) => {
    api.delete('/incubator-accelerators/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Inc.findById({_id: id}, function (err, inc) {
          expect(err).to.be.a('null')
          expect(inc).to.be.a('null')
          done()
        })
      })
  })
})

// DELETE /incubator-accelerators/:id
//   ✓ should remove an investor document

describe('DELETE /incubator-accelerators/:id', () => {
  var id
  before((done) => {
    api.post('/incubator-accelerators')
      .set('Accept', 'application/json')
      .send({
        'name': 'test incubator_accelerator',
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
  it('should remove a investor document', (done) => {
    api.delete('/incubator-accelerators/' + id)
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        Inc.findById({_id: id}, function (err, investor) {
          expect(err).to.be.a('null')
          expect(investor).to.be.a('null')
          done()
        })
      })
  })
})
