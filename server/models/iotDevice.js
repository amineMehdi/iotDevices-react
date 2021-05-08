const mongoose = require("mongoose");

const iotDeviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    number:{
        type: Number,
        required: true,
    },
    description:{
        type: String
    },
    type:{
        type: String
    },
    functionTime:{
        type: Date
    },
    temperature:{
        type: Number
    },
    online:{
        type: Boolean
    }
});

module.exports= iotDeviceSchema;

const dbConnection = require("../controllers/dbConnection");
const IotDevice = dbConnection.model("IotDevice", iotDeviceSchema, "iotdevice");

module.exports.model = IotDevice;