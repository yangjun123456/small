let express = require("express");
let router = express.Router();
let multer = require("multer");
let upload = multer({
  dest: "./public"
});
let {
  StudentUser,
  UserActive,
  UserImage
} = require("../model/mongo");
// 学员端用户登录
router.post("/signin", function (req, res) {
  let userGroup = req.body;
  let newDevicesAry = [];
  let passwordErrUser = [];
  let usernameErr = [];
  let backUser = [];
  let cur = 0;
  let flag = true;
  userGroup.map((item, index) => {
    let {
      userNameID,
    } = item;
    let password = item.passWordID;
    StudentUser.findOne({
      userNameID,
    }, function (err, result) {
      backUser.push(result);
      if (!result && flag === true) {
        flag = false;
        usernameErr.push(item['userNameID']);
        res.send({
          code: 11,
          user: usernameErr
        });
      } else if (result && result['passWordID'] !== password && flag === true) {
        flag = false;
        passwordErrUser.push(result['userNameID']);
        res.send({
          code: 17,
          user: passwordErrUser
        })
      } else if (result && result['passWordID'] === password && flag === true) {
        cur++;
        req.session.user = result;
        userGroup[index]['username'] = result['name'];
        userGroup[index]['currentChosenState'] = false;
        userGroup[index]['isCurrent'] = false;
        let flag = true;
        if (cur === userGroup.length) {
          userGroup.map((item, index) => {
            UserActive.find(function (err, result) {
              result[0]['devicesAry'].map((e, f) => {
                if (e.some((a, b) => {
                    return a['userNameID'] === item['userNameID'];
                  }) && flag === true) {
                  console.log(flag);
                  flag = false;
                  res.send({
                    code: 15,
                    user: item['userNameID'],
                  });
                }
              });
              if (index === userGroup.length - 1 && flag === true) {
                res.send({
                  code: 1,
                  info: backUser
                });
                newDevicesAry = result[0]['devicesAry'];
                newDevicesAry.push(userGroup);
                UserActive.remove(function (err, result) {
                  UserActive.create({
                    devicesAry: newDevicesAry
                  }, function (err, result) {})
                })
              }
            });
          })
        }
      };
    })
  });
});
// 学员端用户注册
router.post("/signup", upload.single("avatar"), function (req, res) {
  console.log('popop');
  console.log(req.body, '1111');
  let user = req.body;
  user.avatar !== "" ? user.avatar = `/${req.file.filename}` : "";
  if (user.avatar) {
    UserImage.find(function (err, result) {
      result[0]['images'].push(user.avatar).toString();
      UserImage.remove(function (err, rrsult) {
        UserImage.create({
          images: result[0]['images']
        }, function (err, result) {
          console.log(result, '0000000');
        })
      })
    })
  }
  let {
    userNameID,
  } = user;
  user['activityPushID'] = [];
  user['informationHITSResourceID'] = [];
  user['informationLocalResourceID'] = [];
  user['trainedEvaluationResourceID'] = [];
  user['lockState'] = 'false';
  StudentUser.findOne({
    userNameID: user.userNameID
  }, function (err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      res.send({
        code: 12
      })
    } else {
      StudentUser.create(user, function (err, result) {
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
// 学员端用户注销
router.post('/delete', function (req, res) {
  let loginOutUser = req.body['userNameID'];
  let retainUser;
  let newDevicesAry = [];
  let filterDevicesAry;
  StudentUser.remove({
    userNameID: loginOutUser
  }, function (err, result) {
    if (err) {
      res.send(err);
    } else if (result) {
      delStudent(retainUser, newDevicesAry, filterDevicesAry, loginOutUser);
      res.send({
        code: 13
      });
    }
  })
})
// 学员端用户退出登录
router.post('/signOut', function (req, res) {
  let loginOutUser = req.body['userNameID'];
  console.log(loginOutUser, 'kkkk');
  let retainUser;
  let newDevicesAry = [];
  let filterDevicesAry;
  req.session.user = '';
  delStudent(retainUser, newDevicesAry, filterDevicesAry, loginOutUser);
  res.send({
    code: 15
  });
})
// 用户修改密码
router.post('/ModifyPassword', function (req, res) {
  console.log(req.body['username'], '[][][][][][][]');
  // let usernameID = req.body['username'];
  StudentUser.findOne({
    userNameID: req.body['username']
  }, function (err, result) {
    if (!result) {
      res.send({
        code: 11,
        user: req.body['username']
      });
    } else {
      StudentUser.update({
        userNameID: req.body['username']
      }, {
        $set: {
          passWordID: req.body['password']
        }
      }, {
        upsert: true
      }, function (err, result) {
        if (result){ 
          res.send({ code: 1 });
        }
      })
    }
  })
})
// 学员端退出登录或者注销账号，删除教师端学员
function delStudent(retainUser, newDevicesAry, filterDevicesAry, loginOutUser) {
  UserActive.find(function (err, result) {
    filterDevicesAry = result;
    filterDevicesAry[0]['devicesAry'].forEach((item, index) => {
      item.forEach((a, b) => {
        if (a.userNameID === loginOutUser) {
          if (filterDevicesAry[0]['devicesAry'][index].length > 1) {
            filterDevicesAry[0]['devicesAry'][index].splice(b, 1);
          } else {
            filterDevicesAry[0]['devicesAry'].splice(index, 1);
          }
        }
      })
    })
    UserActive.remove(function (err, result) {
      UserActive.create({
        devicesAry: filterDevicesAry[0]['devicesAry']
      }, function (err, result) {})
    });
  })
}
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
