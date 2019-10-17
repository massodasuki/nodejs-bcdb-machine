var express = require('express');
var router = express.Router();
var os = require('os-utils');

/* GET machine cpu performance. */
router.get('/systems/', function(req, res, next) {
  os.cpuUsage(function(v){
    // console.log('CPU'+ v);
    res.status(201).send({cpu: v});
  });
});

module.exports = router;
