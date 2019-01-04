const objectiveSchema = new Schema({
  description:    { type: String },
  objectiveType:  { type: String, enum: ['Committed', 'Aspirational']},
  fileType:       { type: String },
  tags:           { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);

module.exports = objectiveSchema;