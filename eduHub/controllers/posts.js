const Class = require("../models/class");

// show the form to create a new post
const newPostForm = (req, res) => {
  classId = req.params.classId;
  res.render("posts/new", {title: "New Post", classId});
};

//save to DB the new post
const addPostToClass = async (req, res) => {
  message = req.body.message;
  heading = req.body.heading;
  classId = req.params.classId;
  
  const subject = await Class.findById(classId);
  console.log("🚀 ~ addPostToClass ~ subject:", subject)
  res.send("post posted");

}

module.exports = {
  new: newPostForm,
  create: addPostToClass
}