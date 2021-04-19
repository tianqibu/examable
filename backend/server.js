const mongoose = require("mongoose");
const { PORT, DATABASE } = require("./config");

// Database Connection
mongoose.connect(DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error(`Database Connection Error -> ${err.message}`);
});

require("./models/StudyCardsModel");

// Import app
const app = require("./app");

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
