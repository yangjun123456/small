let express = require("express");
let router = express.Router();
let multer = require("multer");
let upload = multer({
  dest: "./public"
});
let {
  TeacherUser,
  TeachterActive,
  UserImage
} = require("../model/mongo");
// 用户登录
router.post("/signin", function (req, res) {
  let newDevicesAry = [];
  let password = req.body['passWordID'];
  let {
    userNameID
  } = req.body;
  TeacherUser.findOne({
    userNameID,
  }, function (err, result) {
    if (result && result['passWordID'] === password) {
      TeachterActive.find(function (err, results) {
        newDevicesAry = results[0]['devicesAry'];
        if (results && results[0]['devicesAry'].some((a, b) => {
            return a === req.body['userNameID'];
          })) {
          res.send({
            code: 15,
            user: req.body['userNameID']
          });
        } else {
          newDevicesAry.push(req.body['userNameID']);
          TeachterActive.remove(function (err, result) {
            TeachterActive.create({
              devicesAry: newDevicesAry
            }, function (err, result) {
              // req.session.cookie[req.body['userNameID']] = result;
              // console.log(req.session,'-=-=-=-=');
            })
          })
          res.send({
            code: 1,
            info: result
          });
        }
      })
    } else if (result && result['passWordID'] !== password) {
      res.send({
        code: 17,
        user: req.body['userNameID']
      })
    } else if (err) {
      res.send("500");
    } else if (!result) {
      res.send({
        code: 11,
        user: req.body['userNameID']
      });
    }
  })
})

// 用户注册
router.post("/signup", upload.single("avatar"), function (req, res) {
  let user = req.body;
  user.avatar !== "" ? user.avatar = `/${req.file.filename}` : "";
  if (user.avatar) {
    UserImage.find(function (err, result) {
      result[0]['images'].push(user.avatar).toString();
      UserImage.remove(function (err, rrsult) {
        UserImage.create({
          images: result[0]['images']
        }, function (err, result) {})
      })
    })
  }
  let {
    userNameID,
  } = user;
  TeacherUser.findOne({
    userNameID: user.userNameID
  }, function (err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      res.send({
        code: 12
      })
    } else {
      TeacherUser.create(user, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            code: 1,
            info: result
          });
        }
      })
    }
  })
});
// 用户注销
router.post('/delete', function (req, res) {
  let filterDevicesAry;
  let {
    userNameID
  } = req.body;
  TeacherUser.remove({
    userNameID
  }, function (err, result) {
    TeachterActive.find(function (err, result) {
      filterDevicesAry = result;
      result[0]['devicesAry'].map((item, index) => {
        if (req.body['userNameID'] === item) {
          filterDevicesAry[0]['devicesAry'].splice(index, 1);
        }
      })
      TeachterActive.remove(function (err, result) {
        TeachterActive.create({
          devicesAry: filterDevicesAry[0]['devicesAry']
        }, function (err, result) {})
      })
    });
    if (err) {
      res.send(err);
    } else if (result) {
      res.send({
        code: 13
      });
    }
  })
})
// 用户退出登录
router.post('/signOut', function (req, res) {
  console.log(req.body['userNameID'], '212121');
  let filterDevicesAry;
  let {
    userNameID
  } = req.body;
  req.session.user = '';
  console.log(req.session, req.session.user, '90909090');
  TeachterActive.find(function (err, result) {
    filterDevicesAry = result;
    result[0]['devicesAry'].map((item, index) => {
      if (req.body['userNameID'] === item) {
        filterDevicesAry[0]['devicesAry'].splice(index, 1);
      }
    })
    TeachterActive.remove(function (err, result) {
      TeachterActive.create({
        devicesAry: filterDevicesAry[0]['devicesAry']
      }, function (err, result) {})
    })
  });
  req.session.user = '';
  res.send({
    code: 15
  });
})
// 用户修改密码
router.post('/ModifyPassword', function (req, res) {
  console.log(req.body['username'], '[][][][][][][]');
  // let usernameID = req.body['username'];
  TeacherUser.findOne({
    userNameID: req.body['username']
  }, function (err, result) {
    console.log(result, '9090090');
    if (!result) {
      res.send({
        code: 11,
        user: req.body['username']
      });
    } else {
      TeacherUser.update({
        userNameID: req.body['username']
      }, {
        $set: {
          passWordID: req.body['password']
        }
      }, {
        upsert: true
      }, function (err, result) {
        if (result) {
          res.send({
            code: 1
          });
        }
      })
    }
  })
})
// 获取session
router.get('/getSession', function (req, res) {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.send({
      code: 14
    });
  }
});

module.exports = router;
