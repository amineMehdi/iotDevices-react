const IotDevice = require("../models/iotDevice.js").model;

const getAllDevices = async (_,res) => {
    const allDevices = await IotDevice.find();
    res.json(allDevices);
};

const addIotDevice = async (req, res) => {
    try{
        const iotDeviceData = {...req.body};
        const newIotDevice = await IotDevice.create(iotDeviceData);
        res.status(200).json(newIotDevice);
    }catch(e){
        res.status(404).json(e);
    }
};

const deleteDevice = async (req, res) => {
    const idDevice = req.params.idDevice;
    const removedDevice = await IotDevice.findByIdAndDelete(idDevice);
    res.status(200).json(removedDevice);
}

const updateDevice = async (req, res) => {
    const idDevice = req.params.idDevice;
    const newData = {...req.body};
    const updatedData = await IotDevice.findByIdAndUpdate(idDevice, newData, {new: true});
    res.status(200).json(updatedData);
}

module.exports.getAllDevices = getAllDevices;
module.exports.addIotDevice = addIotDevice;
module.exports.deleteDevice = deleteDevice;
module.exports.updateDevice = updateDevice;
