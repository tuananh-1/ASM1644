var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema(
   {
      customer_name : String,
      product_name: String,
      email : String,
      phonenumber : Number,
      quantity : Number,
   }
);

var OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;