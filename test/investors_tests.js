/* globals describe before after it */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')
const Gov = require('../models/investor')

// GET /investors
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

describe('GET /investors', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/investors')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/investors')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/investors')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.have.property('name')
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/investors')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.have.lengthOf(70)
        done()
      })
  })
})

// POST /investors
//   ✓ should return a 200 response
//   ✓ should add a new investor to the database

describe('POST /investors', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/investors')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should add a investor object to the collection', (done) => {
    api.get('/investors')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[response.body.length - 1].name).to.equal('Wavemaker Pacific Funding')
      done()
    })
  })
})

// GET /investors/:id
//   ✓ should return a 200 response
//   ✓ should return an object containing the fields "name" and "address"

describe('GET /investors/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/investors')
      .set('Accept', 'application/json')
      .send({
        'name': 'test investor',
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
    api.get('/investors/' + id)
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an object that has the fields "name" and "address"', (done) => {
    api.get('/investors/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.investor).to.have.property('name')
      expect(response.body.investor).to.have.property('address')
      done()
    })
  })
  after((done) => {
    api.delete('/investors/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Gov.findById({_id: id}, function (err, investor) {
          expect(err).to.be.a('null')
          expect(investor).to.be.a('null')
          done()
        })
      })
  })
})

// PUT /investors/:id
//   ✓ should return a 200 response
//   ✓ should update a investor document

describe('PUT /investors/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/investors')
      .set('Accept', 'application/json')
      .send({
        'name': 'test investor',
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
    api.put('/investors/' + id)
    .set('Accept', 'application/json')
    .send({
      'address': '1 Good Evening Street, Singapore'
    })
    .expect(200, done)
  })
  it('should update a investor document', (done) => {
    api.get('/investors/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.investor.address).to.equal('1 Good Evening Street, Singapore')
      done()
    })
  })
  after((done) => {
    api.delete('/investors/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Gov.findById({_id: id}, function (err, investor) {
          expect(err).to.be.a('null')
          expect(investor).to.be.a('null')
          done()
        })
      })
  })
})

// DELETE /investors/:id
//   ✓ should remove an investor document

describe('DELETE /investors/:id', () => {
  var id
  before((done) => {
    api.post('/investors')
      .set('Accept', 'application/json')
      .send({
        'name': 'test investor',
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
    api.delete('/investors/' + id)
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        Gov.findById({_id: id}, function (err, investor) {
          expect(err).to.be.a('null')
          expect(investor).to.be.a('null')
          done()
        })
      })
  })
})
