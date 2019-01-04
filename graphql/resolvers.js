const User = require('../models/user')

const resolvers = {
  
  Query: {
    getUsers: () => new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) {
          return reject(err);
        }

        return resolve(users);
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
    })
  }
}

module.exports = resolvers