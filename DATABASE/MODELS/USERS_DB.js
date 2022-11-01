const { json } = require('body-parser');
var mongoose = require('mongoose');


const UserLoginModel = mongoose.model("UserLoginModel", new mongoose.Schema({ Username: String, Email: String, Password:String}));

//---------------------------------------- U S E R-----------------------------------------------

module.exports.getUsersList = async () => {
    return await UserLoginModel.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addUser = async (newUser) => {
    await (new UserLoginModel(newUser)).save();
}

module.exports.UsernameExsits = async (entryUser) => {
    const result = await UserLoginModel.findOne({Username: entryUser.Username});
    if(result === true ) {
        return true;
    }
    return false;
}

module.exports.EmailExsits = async (entryUser) => {
    const result = await UserLoginModel.findOne({Email: entryUser.Email});
    if(result === true) {
        return true;
    }
    return false;
}

module.exports.UserExsits = async (entryUser) => {
    let result;
    if(entryUser){
        result = await UserLoginModel.findOne({Username: entryUser.Username, Email: entryUser.Email, Password:entryUser.Password});
    }

    console.log("\n--> UserExists()");
    console.log("\nchecking in the db whether these credentials match up with anyone");
    console.log(result);
    console.log("\n--> ~ UserExists()");

    if(result===null) {
        return false;
    }
    return true;
}

module.exports.loginUser = async(entryUser) => {
    return await this.UserExsits(entryUser);
}

module.exports.singupUser = (entryUser) => {
    if(this.UsernameExsits(entryUser) || this.EmailExsits(entryUser)) {
        return false;
    }
    addUser(entryUser);
    return true;
}

module.exports.LoggedInAsDietitian = (entryUser) => {
    if( entryUser.Username === "dietitianRashu") {
        return true;
    } else {
        return false;
    }
}