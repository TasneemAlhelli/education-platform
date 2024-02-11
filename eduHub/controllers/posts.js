const Class = require("../models/class");
const { post } = require("../routes/posts");

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

const postsRemove = async (req, res) => {
  const classFound = await Class.findById(req.params.classId);
  const postId = req.params.postId;
  classFound.posts.forEach((value, index) => {   
    if(value._id.equals(postId)) {
      classFound.posts.splice(index, 1);
    }
  });
  await classFound.save();
  res.redirect("/classes/" + req.params.classId);
}

module.exports = {
  new: newPostForm,
  create: addPostToClass,
  delete: postsRemove
}