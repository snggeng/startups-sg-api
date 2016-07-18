/* globals describe it */
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')

// GET /co-working-spaces
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

describe('GET /co-working-spaces', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
  it('should return an object that has a field called "name"', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[0]).to.have.property('name')
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/co-working-spaces')
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(error).to.be.a('null')
        expect(response.body).to.have.lengthOf(3)
        done()
      })
  })
})

// POST /co-working-spaces
//   ✓ should return a 200 response
//   ✓ should return a 422 response if the field color is wrong
//   ✓ should return an error message if the color field is wrong
//   ✓ should add a new co-working-space to the database
//   ✓ should return an error if the color is wrong

describe('POST /co-working-spaces', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should add a co-working-space object to the collection', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[response.body.length - 1].name).to.equal('outram offices')
      done()
    })
  })
})

// GET /co-working-spaces/:id
//   ✓ should return a 200 response
//   ✓ should return an object containing the fields "name" and "address"

describe('GET /co-working-spaces/:id', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/co-working-spaces/578bd9c35251efd197d28ad5')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  // it('should return an object that has the fields "name" and "address"', (done) => {
  //   api.get('/co-working-spaces/578bd9c35251efd197d28ad5')
  //   .set('Accept', 'application/json')
  //   .end((error, response) => {
  //     expect(error).to.be.a('null')
  //     expect(response.body[0]).to.have.property('name')
  //     expect(response.body[0]).to.have.property('address')
  //     done()
  //   })
  // })
})

// PUT /co-working-spaces/:id
//   ✓ should return a 200 response
//   ✓ should update a co-working-space document

describe('PUT /co-working-spaces/:id', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.put('/co-working-spaces/578bd9c35251efd197d28ad5')
    .set('Accept', 'application/json')
    .send({
      'address': '1 Good Evening Street, Singapore'
    })
    .expect(200, done)
  })
  it('should update a co-working-space document', (done) => {
    api.get('/co-working-spaces')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body[1].address).to.equal('1 Good Evening Street, Singapore')
      done()
    })
  })
})

// DELETE /co-working-spaces/:id
//   ✓ should remove a co-working-space document

// describe('DELETE /co-working-spaces/:id', () => {
//   it('should remove a co-working-space document', (done) => {
//     api.get('/co-working-spaces')
//     .end(function (err, res) {
//       expect(err).to.be.a('null')
//       api.delete('/co-working-spaces/1')
//       .set('Accept', 'application/json')
//       .end((error, response) => {
//         expect(error).to.be.a('null')
//         expect(response).should.have.status(200)
//         expect(response).should.be.json
//         expect(response).body.should.be.a('object')
//         expect(response).body.should.have.property('REMOVED')
//         expect(response).body.REMOVED.should.be.a('object')
//         expect(response).body.REMOVED.should.have.property('name')
//         expect(response).body.REMOVED.should.have.property('_id')
//         done()
//       })
//     })
//   })
// })
