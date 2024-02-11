const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

// GET classes/classID/newPost  Show form to add new post
router.get("/classes/:classId/newPost", postsCtrl.new);

// Create new post in DB
router.post("/classes/:classId/newPost", postsCtrl.create);

// Delete a post
router.delete("/classes/:classId/:postId/remove", postsCtrl.delete);

module.exports = router;