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

    getUser: (parent, {id}) => new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        if (err) {
          return reject(err);
        }

        return resolve(user);
      })
    }),

    getObservations: () => new Promise((resolve, reject) => {
      Observation.find((err, observations) => {
        if (err) {
          return reject(err);
        }

        return resolve(observations);
      })
    }),

    getObservation: (parent, {id}) => new Promise((resolve, reject) => {
      Observation.findById(id, (err, observation) => {
        if (err) {
          return reject(err);
        }

        return resolve(observation);
      })
    }),

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