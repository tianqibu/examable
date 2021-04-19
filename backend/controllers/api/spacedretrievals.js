const mongoose = require("mongoose");
const StudyCards = mongoose.model("studycards");

exports.getAllSpacedRetrievals = async (req, res) => {
  try {
    const spacedRetrievals = await StudyCards.find({
      dueRetrvTime: { $lt: Date.now() },
    });
    res.status(200).json(spacedRetrievals);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getNextSpacedRetrieval = async (req, res) => {
  try {
    const spacedRetrieval = await StudyCards.findOne({
      dueRetrvTime: { $lt: Date.now() },
    });

    res.status(200).json(spacedRetrieval);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.updateSpacedRetrieval = async (req, res) => {
  const timeArray = [86400000, 604800000, 1209600000, 2419200000];
  const spacedRetrievalId = mongoose.Types.ObjectId(req.params.id);
  const latestAttemptCorrect = req.body.latestAttemptCorrect;

  try {
    if (req.body.latestAttemptCorrect === undefined) {
      throw "Please enter latestAttemptCorrect key with value set to true or false.";
    }

    const spacedRetrieval = await StudyCards.findById({
      _id: spacedRetrievalId,
    });
    let { correctAttempts, dueRetrvTime } = spacedRetrieval;

    {
      latestAttemptCorrect && correctAttempts++;
    }

    dueRetrvTime =
      correctAttempts < timeArray.length
        ? Date.now() + timeArray[correctAttempts]
        : Date.now() + timeArray[length - 1];

    const updatedSpacedRetrieval = await StudyCards.findByIdAndUpdate(
      { _id: spacedRetrievalId },
      { $set: { correctAttempts, dueRetrvTime } },
      { new: true }
    );

    res.status(200).json(updatedSpacedRetrieval);
  } catch (e) {
    res.status(500).send(e);
  }
};