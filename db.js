const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://guptaverse:Shivammongo@cluster0.akt8xe0.mongodb.net/loginRegister?retryWrites=true&w=majority"
const mongoDB = async()=>{
    try{

        await mongoose.connect(mongoURI,{useNewUrlParser:true});       
    }
    catch(err){
        console.error(err);
    }

}
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo");
})
module.exports = mongoDB;