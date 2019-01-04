const mongoose = require('mongoose')
const UserSchema = require('../mongooseSchemas/userSchema')

module.exports = mongoose.model('users', UserSchema)