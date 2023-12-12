const {Schema, model} = require("mongoose")

const taskSchema = new Schema({
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    edad:{
        type: String,
        required:true
    },
    pais:{
        type: String,
        required:true
    },
})

module.exports = model("Task", taskSchema);