// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
// const { AuthenticationError } = require("apollo-server-express");
const { Contact } = require("../models");
// const { signToken } = require("../utils/auth");
// const { sign } = require("jsonwebtoken");

const { ObjectId } = require('mongodb')


const resolvers = {
  Query: {
    contact: async (parent, args, context) => {
      if (context.contact) {
        return Contact.findOne({ _id: context.contact._id });
      }
    },
  },

  Mutation: {

    addContact: async (parent, args) => {
      const contact = await Contact.create(args)
      return { contact };
  },
    
  },
};

module.exports = resolvers;