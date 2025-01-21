import mongoose from "mongoose";

let ServicesSchema = new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:Number
})

export let ServicesModel = mongoose.model("services", ServicesSchema)