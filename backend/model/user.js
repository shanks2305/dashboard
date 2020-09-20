const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      trim: true,
      unique: true,
    },
    dob: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ques: {
      type: String,
      required: true,
      trim: true,
    }
  }, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
