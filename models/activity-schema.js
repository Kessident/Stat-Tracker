const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/stat-tracker");

const activitySchema = new Schema({
  _id:{type:Number, required:true},
  name:{type:String, default:"New Activity"},
  createdBy:{type:String, required:true},
  stats:[{
    date:{type:Date, default:new Date()},
    amount:{type:Number, default:0}
  }]
});

const Activity = mongoose.model("activities", activitySchema);
module.exports = Activity;
