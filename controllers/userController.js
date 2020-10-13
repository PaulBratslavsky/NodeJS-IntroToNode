/**************************************
    IMPORTS
**************************************/
const User = require('../models/UserModel');

/**************************************
    USER CONTROLLER
**************************************/
exports.login = function() {

}

exports.logout = function() {
    
}

exports.home = function(req, res) {
    res.render("home-guest");
}

exports.register = function(req, res) {
    let user = new User(req.body);
    user.register();   

    if (user.errors.length > 0) {
        res.send(user.errors);
    } else {
        res.send("Success.")
    }
}