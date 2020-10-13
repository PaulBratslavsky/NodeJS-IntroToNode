console.log('hello')
/**************************************
    ROUTER
**************************************/
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');


/**************************************
    DEFINE ROUTER 
**************************************/
router.get("/", userController.home);
router.post("/register", userController.register);

/**************************************
    EXPORT
**************************************/
module.exports = router;