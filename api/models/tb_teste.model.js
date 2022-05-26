var mongoose = require("mongoose"),
    Schema = mongoose.Schema

var tb_testeSchema = new Schema({
     _id : String,
     name : String,

});

tb_testeSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId().toHexString();
    next();
});

var tb_teste = mongoose.model("tb_teste", tb_testeSchema,"tb_teste");
module.exports = tb_teste;