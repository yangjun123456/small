let express = require("express");
let router = express.Router();
let {
  UserActive,
} = require("../model/mongo");

router.post('/upLock', function (req, res) {
  let user = req.body;
  let num = 0;
  UserActive.find(function (err, results) {
    user.map((a, b) => {
      num++;
      results[0]['devicesAry'].map((item, index) => {
        item.map((e, f) => {
          if (e['userNameID'] === a['userNameID']) {
            e['isCurrent'] = true;
          }
        })
      });
      if (num === user.length) {
        UserActive.remove(function (err, result) {
          UserActive.create({
            'devicesAry': results[0]['devicesAry']
          }, function (err, result) {
            res.send({
              code: 1
            });
          })
        })
      }
    })
  });
})
router.post('/unLock', function (req, res) {
  let user = req.body;
  let num = 0;
  UserActive.find(function (err, results) {
    user.map((a, b) => {
      num++;
      results[0]['devicesAry'].map((item, index) => {
        item.map((e, f) => {
          if (e['userNameID'] === a['userNameID']) {
            e['isCurrent'] = false;
          }
        })
      });
      if (num === user.length) {
        UserActive.remove(function (err, result) {
          UserActive.create({
            'devicesAry': results[0]['devicesAry']
          }, function (err, result) {
            res.send({
              code: 1
            })
          })
        })
      }
    })
  });
})
router.get('/AllUpLock', function (req, res) {
  let user = req.body;
  let num = 0;
  UserActive.find(function (err, results) {
    results[0]['devicesAry'].map((item, index) => {
      num++;
      item.map((e, f) => {
        e['isCurrent'] = true;
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
router.get('/AllUnLock', function (req, res) {
  console.log('1111');
  let user = req.body;
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
router.get('/huoqu', function (req, res) { 
  UserActive.find(function (err, result) { 
    if (result){ 
      res.send({ code: 1 });
    }
  })
})
module.exports = router;
