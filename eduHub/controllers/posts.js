const Class = require("../models/class");

const newPostForm = (req, res) => {
  res.send("form for adding new post");
};

const addPostToClass = async (req, res) => {
  res.send("posts added to class");
}

module.exports = {
  new: newPostForm,
  create: addPostToClass
}