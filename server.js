

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  use
 });

require("./controller/html-routes")(app);
require("./controller/api-routes")(app);

// const seed = require("./seeders/seed");

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
