/* globals describe before after it */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')
const Event = require('../models/event')

// GET /events
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

describe('GET /events', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.have.property('name')
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/events')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.have.lengthOf(10)
        done()
      })
  })
})

// POST /events
//   ✓ should return a 200 response
//   ✓ should add a new event to the database

describe('POST /events', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should add a event object to the collection', (done) => {
    api.get('/events')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[response.body.length - 1].name).to.equal('Casual Connect')
      done()
    })
  })
})

// GET /events/:id
//   ✓ should return a 200 response
//   ✓ should return an object containing the fields "name" and "address"

describe('GET /events/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/events')
      .set('Accept', 'application/json')
      .send({
        'name': 'test event',
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
    api.get('/events/' + id)
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an object that has the fields "name" and "address"', (done) => {
    api.get('/events/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.event).to.have.property('name')
      expect(response.body.event).to.have.property('address')
      done()
    })
  })
  after((done) => {
    api.delete('/events/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Event.findById({_id: id}, function (err, event) {
          expect(err).to.be.a('null')
          expect(event).to.be.a('null')
          done()
        })
      })
  })
})

// PUT /events/:id
//   ✓ should return a 200 response
//   ✓ should update a event document

describe('PUT /events/:id', function () {
  this.timeout(10000)
  var id
  before((done) => {
    api.post('/events')
      .set('Accept', 'application/json')
      .send({
        'name': 'test event',
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
    api.put('/events/' + id)
    .set('Accept', 'application/json')
    .send({
      'address': '1 Good Evening Street, Singapore'
    })
    .expect(200, done)
  })
  it('should update a event document', (done) => {
    api.get('/events/' + id)
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.event.address).to.equal('1 Good Evening Street, Singapore')
      done()
    })
  })
  after((done) => {
    api.delete('/events/' + id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(err).to.be.a('null')
        Event.findById({_id: id}, function (err, event) {
          expect(err).to.be.a('null')
          expect(event).to.be.a('null')
          done()
        })
      })
  })
})

// DELETE /events/:id
//   ✓ should remove an event document

describe('DELETE /events/:id', () => {
  var id
  before((done) => {
    api.post('/events')
      .set('Accept', 'application/json')
      .send({
        'name': 'test event',
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
  it('should remove a event document', (done) => {
    api.delete('/events/' + id)
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        Event.findById({_id: id}, function (err, event) {
          expect(err).to.be.a('null')
          expect(event).to.be.a('null')
          done()
        })
      })
  })
})
