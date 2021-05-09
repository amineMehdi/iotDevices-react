var express = require('express');
var router = express.Router();

const controller = require("../controllers/home.js");

router.get('/', controller.getAllDevices);
router.post('/', controller.addIotDevice);
router.delete('/:idDevice', controller.deleteDevice);
router.put('/:idDevice', controller.updateDevice);  
module.exports = router;
