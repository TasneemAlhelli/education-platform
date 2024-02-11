const Review = require("../models/review");

const showReviewForm = (req, res) => {
  const classId = req.params.classId;
  res.render("reviews/new",
  {
    title: "New Review",
    classId
  });
}

const saveReview = (req, res) => {
  const userId = req.user._id;
  const classId = req.params.classId;
  const message = req.body.message;
  const rating = req.body.rating;

  Review.create({
    user: userId,
    class: classId,
    message: message,
    rating: rating
  });

  res.redirect("/classes/" + classId + "/all");
}

const allReviews = (req, res) => {
  
}

module.exports = {
  index: showReviewForm,
  create: saveReview,
  show: allReviews
}