const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const { requireUserAuth } = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/account', requireUserAuth, userController.addAccount);
router.get('/logout', requireUserAuth, userController.logout);
router.post('/botresponse', requireUserAuth, userController.getResponse);
router.post('/investment', requireUserAuth, userController.addInvestment);
router.post('/goal', requireUserAuth, userController.addGoal);
router.post('/expense', requireUserAuth, userController.addExpense);
router.post('/liabilities', requireUserAuth, userController.addLiabilities);
router.post("/family", requireUserAuth, userController.addFamily);
router.post('/family/join', requireUserAuth, userController.joinFamily);
router.get('/family/delete/:familyId/:goalId', requireUserAuth, userController.deleteFamilyGoal);
router.post('/family/goal/:familyId', requireUserAuth, userController.addFamilyGoal);
router.get('/goal/delete/:goalType', requireUserAuth, userController.deleteGoal);


module.exports = router;
