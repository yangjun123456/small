let express = require("express");
let router = express.Router();
let {
  TechnicalInformation
} = require('../model/mongo');


// 获取技术资料
router.get('/getTechnicalInformation', (req, res) => {
  console.log('ghghghghgh');
  TechnicalInformation.findOne({
    name: "technicalInformation"
  }, function (err, result) {
    if (err) {
      res.send('500');
    } else {
      res.send({
        code: 1,
        info: result
      });
    }
  })
})

module.exports = router;
