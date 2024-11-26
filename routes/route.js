const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { requireUserAuth } = require("../middleware/auth");

router.get("/", requireUserAuth, userController.renderDashboard);
router.get("/investments", requireUserAuth, userController.renderInvestment);
router.get("/goals", requireUserAuth, userController.renderGoals);
router.get("/learnings", requireUserAuth, userController.renderLearnings);
router.get("/family", requireUserAuth, userController.renderFamily);
router.get("/citigpt", requireUserAuth, userController.renderChat);
router.get("/expenses", requireUserAuth, userController.renderExpenses);
router.get("/liabilities", requireUserAuth, userController.renderLiabilities);

router.get("/login", userController.renderLogin);
router.get("/register", userController.renderRegister);

module.exports = router;
