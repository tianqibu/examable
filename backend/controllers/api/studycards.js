const mongoose = require("mongoose");
const StudyCards = mongoose.model("studycards");

exports.getAllStudyCards = async (req, res) => {
  try {
    const studyCards = await StudyCards.find({});
    res.status(200).json(studyCards);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getSingleStudyCard = async (req, res) => {
  const studyCardId = mongoose.Types.ObjectId(req.params.id);

  try {
    const studyCard = await StudyCards.findById({ _id: studyCardId });
    res.status(200).json(studyCard);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.createStudyCard = async (req, res) => {
  const { question, answer } = req.body;
  const { correctAttempts, dueRetrvTime } = {
    correctAttempts: 0,
    dueRetrvTime: Date.now(),
  };

  try {
    const newStudyCard = new StudyCards({
      question,
      answer,
      correctAttempts,
      dueRetrvTime,
    });

    await newStudyCard.save();
    res
      .status(201)
      .json({ Location: `/api/studycards/${newStudyCard._id}`, newStudyCard });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateStudyCard = async (req, res) => {
  const studyCardId = mongoose.Types.ObjectId(req.params.id);
  const { question, answer } = req.body;
  try {
    const updatedStudyCard = await StudyCards.findByIdAndUpdate(
      { _id: studyCardId },
      { $set: { question, answer } },
      { upsert: true, new: true }
    );
    res.status(200).json(updatedStudyCard);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.deleteStudyCard = async (req, res) => {
  const studyCardId = mongoose.Types.ObjectId(req.params.id);
  try {
    await StudyCards.deleteOne({ _id: studyCardId });
    res.status(204).json({});
  } catch (e) {
    res.status(500).send(e);
  }
};