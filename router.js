/**************************************
    ROUTER
**************************************/
const express = require('express');
const userController = require('./controllers/userController');
const router = express.Router();


/**************************************
    DEFINE ROUTER 
**************************************/
router.get("/", userController.home);
router.post("/register", userController.register);

/**************************************
    EXPORT
**************************************/
module.exports = router;