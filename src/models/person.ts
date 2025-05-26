import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:String, required:true},
    occupation:{type:String, default:'No data'}
})

//ES TS export default
export default mongoose.model('Person', personSchema)