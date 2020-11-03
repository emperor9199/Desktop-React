const mongoose = require("mongoose");

const Profile = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Profile", Profile);
