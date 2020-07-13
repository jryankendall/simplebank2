require("dotenv").config();

var mongoDetails = {};

if (process.env.NODE_ENV == "production") {
    mongoDetails = {
        mongoURI: "fffff"
    }
} else {
    mongoDetails = {
        mongoURI: "mongodb://localhost/bank"
    }
}

module.exports = mongoDetails;