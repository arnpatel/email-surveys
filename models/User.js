const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleDisplayName: String,
  googleEmails: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
