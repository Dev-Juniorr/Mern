const express = require("express");
const router = express.Router();
const {
  getGoals,
  getGoal,
  postGoal,
  putGoal,
  deleteGoal,
} = require("../controllers/goalController");

const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getGoals).get(protect, getGoal).post(protect, postGoal)
router.route("/:id").put(protect, putGoal).delete(protect, deleteGoal)

module.exports = router;
