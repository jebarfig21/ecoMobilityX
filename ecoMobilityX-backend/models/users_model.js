
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    last_name:{
      type: String,
      required: true
    },
    email: {
        type: String
    },
    emailVerified: {
      type: Boolean
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber: {
      type: Number
    },
    photoURL: {
      type: String
    },
}, {
    timestamps: true
})


const User = mongoose.model("Usuario", UserSchema)

module.exports = {
  User
};

