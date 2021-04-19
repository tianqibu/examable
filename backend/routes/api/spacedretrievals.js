const express = require("express");
const router = express.Router();
const spacedRetrievalsController = require("../../controllers/api/spacedretrievals");

// Get ALL Spacedretrievals
router.get("/", spacedRetrievalsController.getAllSpacedRetrievals);

// Get Next Spacedretrieval
router.get("/nextCard", spacedRetrievalsController.getNextSpacedRetrieval);

// Update ONE Spacedretrieval
router.put("/:id", spacedRetrievalsController.updateSpacedRetrieval);

module.exports = router;