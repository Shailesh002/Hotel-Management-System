const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HMS", { useNewUrlParser: true});
const UserLoginModel = mongoose.model("UserLoginModel", new mongoose.Schema({ Username: String, Email: String, Password:String}));

const addUser = async (newUser) => {
    await (new UserLoginModel(newUser)).save();
}

const createUser = async (entryUser) => {
    const var1 = await UserLoginModel.findOne({Userame: entryUser.Userame});
    const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
    if(var1 === true || var2 === true) {
        return true;
    }
    addUser(entryUser);
    return false;
}

createUser({Username: "Shailesh", Email:"shailesh@gmail.com", Password:"Shailesh"});
