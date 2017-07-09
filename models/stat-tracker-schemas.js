const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/stat-tracker");
let newDate = new Date();
let defaultDate = newDate.getMonth() + "/" + newDate.getDate() +  "/" + newDate.getFullYear();
const activitySchema = new Schema({
  _id:{type:Number, required:true, default:1},
  name:{type:String, default:"New Activity"},
  createdBy:{type:String, required:true},
  stats:[{
    _id:{type:Number, required:true, default:1},
    date:{type:String, default:defaultDate},
    amount:{type:Number, default:0}
  }]
});

const userSchema = new Schema({
  _id:{type: Number, required:true, default:1},
  username:{type:String, required:true},
  password:{type:String, required:true}
});



const User = mongoose.model("users", userSchema);
const Activity = mongoose.model("activities", activitySchema);

module.exports = {
  Activities:Activity,
  Users:User
};
