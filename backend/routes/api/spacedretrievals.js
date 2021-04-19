const express = require("express");
const router = express.Router();
const spacedRetrievalsController = require("../../controllers/api/spacedretrievals");

// Get ALL Spacedretrievals
router.get("/", spacedRetrievalsController.getAllSpacedRetrievals);

// Get ONE Spacedretrieval
router.get("/:id", spacedRetrievalsController.getSingleSpacedRetrieval);

// // Get ONE Spacedretrieval question
router.get(
  "/:id/question",
  spacedRetrievalsController.getSingleSpacedRetrievalQuestion
);

// Get ONE Spacedretrieval answer
router.get(
  "/:id/answer",
  spacedRetrievalsController.getSingleSpacedRetrievalAnswer
);

// Update ONE Spacedretrieval
router.put("/:id", spacedRetrievalsController.updateSpacedRetrieval);

module.exports = router;
