const User = require('../models/user')
const Observation = require('../models/observation')

const resolvers = {
  
  Query: {
    getUsers: () => new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) {
          return reject(err);
        }

        return resolve(users);
      })
    }),
    
    getObservations: () => new Promise((resolve, rejeft) => {
      Observation.find((err, observations) => {
        if (err) {
          return reject(err);
        }

        return resolve(observations);
      })
    })
  },

  Mutation: {

    createUser: (root, props) => new Promise((resolve, reject) => {

      const user = new User(props);

      user.save((err, user) => {
        if (err) {
          return reject(err);
        }

        return resolve(user);
      })
    }),

    createObservation: (root, props) => new Promise((resolve, reject) => {

      const observation = new Observation(props);

      observation.save((err, observation) => {
        if (err) {
          return reject(err);
        }

        return resolve(observation);
      })
    })
  }
}

module.exports = resolvers