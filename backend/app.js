const express = require("express");
const app = express();
var cors = require('cors')
const morgan = require("morgan");
const { NODE_ENV } = require("./config");
const studyCardsRouter = require("./routes/api/studycards");
const spacedRetrievalsRouter = require("./routes/api/spacedretrievals");

app.use(cors())

// set parse application urlencoded and json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set morgan middelware format for app
app.use(morgan(NODE_ENV));

// Studycards API routes
app.use("/api/studycards", studyCardsRouter);

// Spacedretrievals API routes
app.use("/api/spacedretrievals", spacedRetrievalsRouter);

// export the app
module.exports = app;
