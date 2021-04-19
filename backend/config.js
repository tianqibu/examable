require("dotenv").config({ path: ".env" });

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "common",
  DATABASE: process.env.DATABASE,
};
