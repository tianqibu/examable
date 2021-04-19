const express = require("express");
const router = express.Router();
const studyCardsController = require("../../controllers/api/studycards");

// Get ALL Studycards
router.get("/", studyCardsController.getAllStudyCards);

// Get ONE Studycard
router.get("/:id", studyCardsController.getSingleStudyCard);

// Create Studycard
router.post("/", studyCardsController.createStudyCard);

// Update Studycard
router.put("/:id", studyCardsController.updateStudyCard);

// Delete Studycard
router.delete("/:id", studyCardsController.deleteStudyCard);

module.exports = router;
