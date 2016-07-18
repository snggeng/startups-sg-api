const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')
const CoSpace = require('./cospace')
const Event = require('./event')
const Gov = require('./government_program')
const Investor = require('./investor')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  auth_token: { type: String, unique: true },
  admin: {type: Boolean},
  _cospaces: [{type: mongoose.Schema.Types.ObjectId, ref: 'CoSpace'}],
  _events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
  _government_programs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Gov'}],
  _investors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Investor'}]
})

UserSchema.pre('save', function (next) {
  const user = this

  // here, we use bcrypt to generate salt, with 8 iterations.
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
  // GENERATE AUTHENTICATION TOKEN
  user.auth_token = uuid.v4()
})

UserSchema.methods.authenticate = function (password, callback) {
  bcrypt.compare(password, this.password, callback)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
