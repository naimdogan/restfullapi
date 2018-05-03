const mongoose = require("mongoose");

const Hotel = mongoose.Schema({
  id: Number,
  name: String,
  locaiton: String,
  score: String,
  description: String,
  link: String
});
const Food = mongoose.Schema({
  id: Number,
  name: String,
  type: Number,
  restaurantName: String,
  adress: String,
  description: String,
  link: String
});
const Activity = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  link: String,
  score: String
});
const Visit = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  link: String,
  score: String
});
const Flora = mongoose.Schema({
  id: Number,
  name: String,
  kind: String,
  locaiton: String,
  description: String,
  link: String
});

const Fauna = mongoose.Schema({
  id: Number,
  name: String,
  kind: String,
  locaiton: String,
  description: String,
  link: String
});

const Comments = mongoose.Schema({
  id: Number,
  author: String,
  locaiton: String,
  message: String,
  link: String,
  score: String
});

const AreaSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    country: Number,
    district: Number,
    region: Number,
    hotel: [Hotel],
    food: [Food],
    activity: [Activity],
    visit: [Visit],
    flora: [Flora],
    fauna: [Fauna],
    comments: [Comments],
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("areas", AreaSchema);
