const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');



// Route for getting a coupon code
router.get('/getCouponCode', UserController.getCouponCode);

// Route for booking a show
router.post('/bookShow', UserController.bookShow);



module.exports = router;
