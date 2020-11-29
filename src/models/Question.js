const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
  to_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  by_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  is_anonym: {
    type: Boolean,
    required: true,
  },
  is_answered: {
    type: Boolean,
    default: false,
  },
  is_displayable: {
    type: Boolean,
    default: false,
  },
  is_commentable: {
    type: Boolean,
    default: false,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Question = mongoose.model("Question", QuestionSchema);
