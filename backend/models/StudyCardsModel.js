const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create study cards schema
const StudyCardsSchema = new Schema({
  id: {
    type: ObjectId,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  correctAttempts: {
    type: Number,
    required: true,
  },
  latestAttemptCorrect: {
    type: Boolean,
    required: true,
  },
  dueRetrvTime: {
    type: Number,
    required: true,
  },
  first: {
    type: Boolean,
  },
  nextSpacedRetrievalURI: {
    type: String,
  },
});

module.exports = mongoose.model("studycards", StudyCardsSchema);
