const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const contactSchema = new Schema(
{
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    message: {
        type: String,
        required: true,
    }
},
{
    toJSON: {
      virtuals: true,
    },
  },

)

const Contact = model('Contact', contactSchema);

module.exports = Contact;