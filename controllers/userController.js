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
    res.send("register user");
}