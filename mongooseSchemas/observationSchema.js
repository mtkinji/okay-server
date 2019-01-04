const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  title:            { type: String, required: true },
  observation:      { type: String, required: true },
  ownerId:          { type: String, required: true },
  fileType:         { type: String },
  fileLocation:     { type: String },
  researchMethod:   { type: String },
  experienceVector: { type: String },
  emotions:         { type: Array },
  frequency:        { type: String },
  magnitude:        { type: String },
  props:            { type: Array },
  journey:          { type: String },
  involvedParties:  { type: Array }
},
{ timestamps: true })