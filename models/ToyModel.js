var mongoose = require('mongoose');

var ToySchema = mongoose.Schema(
   {
      name : String,
      type : String,
      quantity : Number,
      price : Number,
      image : String,
      brand: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'brands'  // 'brands': collection
      }
     
      
   }
);

var ToyModel = mongoose.model("toys", ToySchema);

module.exports = ToyModel;