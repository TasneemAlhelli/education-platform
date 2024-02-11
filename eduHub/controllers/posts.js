const Class = require("../models/class");

// show the form to create a new post
const newPostForm = (req, res) => {
  classId = req.params.classId;
  res.render("posts/new", {title: "New Post", classId});
};

//save to DB the new post
const addPostToClass = async (req, res) => {
  let message = req.body.message;
  let heading = req.body.heading;
  let classId = req.params.classId;
  
  const subject = await Class.findById(classId);
  subject.posts.push({heading: heading, message: message});
  await subject.save();
  res.redirect("/classes/" + classId);
}

module.exports = {
  new: newPostForm,
  create: addPostToClass
}