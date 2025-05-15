 import mongoose from "mongoose";
 
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
     },
    addressLine1: {
        type: String,
        required:true
     },
     addressLine2: {
        type: String,
     },
     city: {
         type: String,
         required:true
     },
     pinCode: {
         type: String,
         required:true
     },
     specializedIn: {
         type: String,
     }
 }, { timestamps: true })
 
export const Doctor = mongoose.model('Hospital', hospitalSchema);