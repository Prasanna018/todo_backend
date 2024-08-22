// const mongoose = require("mongoose");
const mongoose = require("mongoose");





mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/Todos")

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean
});




const Tododb = mongoose.model("todo", TodoSchema);

module.exports = Tododb;

