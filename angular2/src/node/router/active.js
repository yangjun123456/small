let express = require("express");
let router = express.Router();
let {
  ActivePushPage,
  InformationPushPage,
  ResourcePushPage,
  Evaluation
} = require("../model/mongo");
let fs = require('fs');
let user = JSON.parse(fs.readFileSync('./jsonData/active.json', 'utf-8'));
// 教师端获取已有活动列表
router.get('/getActivePushPage', (req, res) => {
  ActivePushPage.findOne({
    name: 'ActivePushPage'
  }, function (err, result) {
    if (err) {
      res.send("500");
    } else {
      console.log(result);
      res.send({
        code: 1,
        info: result
      });

    }
  })
})
// 教师端获取信息推送HITS页面活动列表
router.get('/getInformationPushHITSPage', (req, res) => {
  InformationPushPage.findOne({
    name: 'InformationPushHITSPage'
  }, function (err, result) {
    if (err) {
      res.send("500");
    } else {
      console.log(result);
      res.send({
        code: 1,
        info: result
      });

    }
  })
})
// 教师端获取资源推送LOCAL页面活动列表
router.get('/getInformationPushLOCALPage', (req, res) => {
  ResourcePushPage.findOne({
    name: 'InformationPushLOCALPage'
  }, function (err, result) {
    if (err) {
      res.send("500");
    } else {
      res.send({
        code: 1,
        info: result
      });

    }
  })
})
// 教师端获取训后测评页面活动列表
router.get('/getEvaluationPage', (req, res) => {
  Evaluation.findOne({
    name: 'EvaluationPage'
  }, function (err, result) {
    if (err) {
      res.send("500");
    } else {
      console.log(result);
      res.send({
        code: 1,
        info: result
      });

    }
  })
})

module.exports = router;
