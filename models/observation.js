const mongoose = require('mongoose')
const observationSchema = require('../mongooseSchemas/observationSchema')

module.exports = mongoose.model('observations', observationSchema)