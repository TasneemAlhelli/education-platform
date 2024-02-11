const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/classes/:classId/reviews", reviewsCtrl.index);

router.get("/classes/:classId/all", reviewsCtrl.show);

router.post("/classes/:classId/reviews", reviewsCtrl.create);

module.exports = router;
