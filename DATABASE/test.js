const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HMS", { useNewUrlParser: true});
const SingleRoom = mongoose.model("SingleRoom", new mongoose.Schema({ RoomNo: String}));

const addSingleRoom = async (newUser) => {
    await (new SingleRoom(newUser)).save();
}

// const createUser = async (entryUser) => {
//     const var1 = await UserLoginModel.findOne({Userame: entryUser.Userame});
//     const var2 = await UserLoginModel.findOne({Email: entryUser.Email});
//     if(var1 === true || var2 === true) {
//         return true;
//     }
//     addUser(entryUser);
//     return false;
// }

addSingleRoom({RoomNo:'101'});


