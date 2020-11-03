const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Profile = require("./models/Profile");

const app = express();

mongoose.connect("mongodb://127.0.0.1/profile", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log("MongoDB Connected"));

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await Profile.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/create", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    Profile.deleteOne({ _id: id }, (err, data) => {
      if (err) {
        res.json({ msg: "error in deletion" });
      } else {
        res.json({ msg: "deleted" });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => console.log("Server Started..."));
