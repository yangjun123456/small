let express = require("express");
let router = express.Router();
let {
  UserActive
} = require('../model/mongo');


// 教师端获取已登录的学员
router.get('/getIsLoginStudent', (req, res) => {
  let num = 0;
  UserActive.find(function (err, results) {
    results[0]['devicesAry'].map((item, index) => {
      num++;
      item.map((e, f) => {
        e['isCurrent'] = false;
      })
      if (num === results[0]['devicesAry'].length) {
        UserActive.remove(function (err, result) {
          UserActive.create({
            'devicesAry': results[0]['devicesAry']
          }, function (err, result) {
            if (err) {
              res.send('500');
            } else if (result) {
              res.send({
                code: 1,
                info: result
              });
            }
          })
        })
      }
    })
  })
})
// 教师端获取已登录学员的锁屏状态
router.get('/getIsLoginStudentState', function (req, res) {
  UserActive.find(function (err, result) {
    if (result) {
      res.send({
        code: 1,  
        info: result
      })
    }
  })
})
module.exports = router;
