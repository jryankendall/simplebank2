require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const API_PORT = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
const app = express();
const router = express.Router();
const data = require("./data");

//Passing cors function as middleware into app
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//Appends "/api" for http requests
app.use("/api", router);

// DB Config
const dbUrl = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

let db = mongoose.connection;

app.listen(API_PORT, () => console.log(`Server up and running on port ${API_PORT} !`));
