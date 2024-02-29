const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email : {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ], 
    reactions: [reactionSchema], 
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

const User = model('User', userSchema);

module.exports = User;