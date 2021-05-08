var express = require('express');
var router = express.Router();

const controller = require("../controllers/home.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', controller.getAllDevices);
router.post('/', controller.addIotDevice);
router.delete('/:idDevice', controller.deleteDevice);
router.put('/:idDevice', controller.updateDevice);  
module.exports = router;
