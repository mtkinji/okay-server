const mongoose = require('mongoose');
const schema = require('../mongooseSchemas/objectiveSchema');

const User = mongoose.model('User', userSchema);

//Hard coded obective creation
var newObjective = new Objective({
  description: 'This is an objective description',
  type: 'Watanabe',
  email: Math.random(),
  }
);

createdUser.save(function (err, createdUser) {
  if (err) return console.error(err);
  console.log(createdUser);
});