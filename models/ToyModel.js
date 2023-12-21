var mongoose = require('mongoose');

var ToySchema = mongoose.Schema(
   {
      name : String,
      type : String,
      quantity : Number,
      price : Number,
      image : String,
      country: String,
      date: Date,
      
   }
);

var ToyModel = mongoose.model("toys", ToySchema);

module.exports = ToyModel;