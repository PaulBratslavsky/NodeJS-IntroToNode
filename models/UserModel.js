const validator = require('validator');


let User = function(data) {
    this.data = data
    this.errors = [];
}

User.prototype.cleanUp = function() {
    if (typeof(this.data.username) != "string") {
        this.data.username = "";
    }

    if (typeof(this.data.password) != "string") {
        this.data.password = "";
    }

    if (typeof(this.data.email) != "string") {
        this.data.email = "";
    }

    // only return expected fields
    this.data = {
        username: this.username.trim().toLowerCase(),
        email: this.email.trim().toLowerCase(),
        password: this.password
    }
    
}

User.prototype.validate = function() {
    if (this.data.username === "") {
        this.errors.push("You must provide a user name.");
    }

    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("Username can only contain letters or numbers.")
    }

    if (!validator.isEmail(this.data.email)) {
        console.log(!validator.isEmail(this.data.email), "FTF")
        this.errors.push("You must provide a valid email.");
    }

    if (this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("Password must be at least 12 characters.");
    }

    if (this.data.password.length > 100) {
        this.errors.push("Password cannot exceed 100 characters.");
    }

    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("Username must be at least 3 characters.");
    }

    if (this.data.username.length > 30) {
        this.errors.push("Username cannot exceed 30 characters.");
    }

    console.log(this.errors);

}

User.prototype.register = function() {
    // 1. Validate User
    this.cleanUp();
    this.validate();

    // 2. If Valid Store to Database
}

module.exports = User;