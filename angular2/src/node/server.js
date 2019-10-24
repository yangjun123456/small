let express = require('express');
let session = require("express-session");
let path = require("path");
let flash = require("connect-flash");
let app = express();
let bodyParse = require('body-parser');
let MongoStore = require('connect-mongo')(session);
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let studentUser = require('./router/studentUser');
let teacherUser = require('./router/teacherUser');
let courses = require('./router/courses');
let technicalInformation = require('./router/technicalInformation');
let active = require('./router/active');
let registeredCadets = require('./router/registeredCadets');
let lock = require('./router/lock');
let {
  StudentUser,
  UserActive
} = require("./model/mongo");
app.use(express.static(path.resolve("node_modules")));
app.use(express.static(path.resolve("public")));
app.use(express.static(__dirname));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
  extended: true
}));
// 建立socket连接
io.on('connection', socket => {
  // 教师端推送活动
  socket.on('message', data => {
    let anExistingActiveArray = [];
    let current = 0;
    data[0]['user'].map((item, index) => {
      let num = 0;
      if (item.length > 1) {
        item.map((e, f) => {
          StudentUser.findOne({
            userNameID: e['userNameID']
          }, function (err, result) {
            let newResult;
            let flag = null;
            switch (data[data.length - 1]) {
              case 'activity':
                flag = result['activityPushID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['activityPushID'].push(data[0]['activity']);
                newResult = result['activityPushID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    activityPushID: newResult
                  }, function (err, result) {
                    console.log(result, '222');
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  num++;
                  current++;
                  anExistingActiveArray.push(result['name']);
                  if (num > 1) {
                    if (current === data[0]['user'][0].length) {
                      socket.emit('activeError', {
                        user: anExistingActiveArray
                      });
                    }
                  }
                }
                break;
              case "HITS":
                console.log(result['informationHITSResourceID'], '9999');
                flag = result['informationHITSResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['informationHITSResourceID'].push(data[0]['activity']);
                newResult = result['informationHITSResourceID'];
                console.log(flag, '0000000');
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    informationHITSResourceID: newResult
                  }, function (err, result) {
                    console.log(result, '222');
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  num++;
                  current++;
                  anExistingActiveArray.push(result['name']);
                  if (num > 1) {
                    if (current === data[0]['user'][0].length) {
                      socket.emit('activeError', {
                        user: anExistingActiveArray
                      });
                    }
                  }
                }
                break;
              case "LOCAL":
                flag = result['informationLocalResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['informationLocalResourceID'].push(data[0]['activity']);
                newResult = result['informationLocalResourceID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    informationLocalResourceID: newResult
                  }, function (err, result) {
                    console.log(result, '222');
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  num++;
                  current++;
                  anExistingActiveArray.push(result['name']);
                  if (num > 1) {
                    if (current === data[0]['user'][0].length) {
                      socket.emit('activeError', {
                        user: anExistingActiveArray
                      });
                    }
                  }
                }
                break;
              case "Evaluation":
                flag = result['trainedEvaluationResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['trainedEvaluationResourceID'].push(data[0]['activity']);
                newResult = result['trainedEvaluationResourceID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    trainedEvaluationResourceID: newResult
                  }, function (err, result) {
                    console.log(result, '222');
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  num++;
                  current++;
                  anExistingActiveArray.push(result['name']);
                  if (num > 1) {
                    if (current === data[0]['user'][0].length) {
                      socket.emit('activeError', {
                        user: anExistingActiveArray
                      });
                    }
                  }
                }
                break;
              default:
                return;
            }
          })
        });
      } else {
        item.map((e, f) => {
          StudentUser.findOne({
            userNameID: e['userNameID']
          }, function (err, result) {
            let newResult;
            let flag;
            switch (data[data.length - 1]) {
              case 'activity':
                flag = result['activityPushID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['activityPushID'].push(data[0]['activity']);
                newResult = result['activityPushID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    activityPushID: newResult
                  }, function (err, result) {
                    io.emit('activePush', data);
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                  })
                } else {
                  anExistingActiveArray.push(result['name']);
                  socket.emit('activeError', {
                    user: anExistingActiveArray
                  });
                }
                break;
              case "HITS":
                flag = result['informationHITSResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['informationHITSResourceID'].push(data[0]['activity']);
                newResult = result['informationHITSResourceID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    informationHITSResourceID: newResult
                  }, function (err, result) {
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  anExistingActiveArray.push(result['name']);
                  socket.emit('activeError', {
                    user: anExistingActiveArray
                  });
                }
                break;
              case "LOCAL":
                flag = result['informationLocalResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['informationLocalResourceID'].push(data[0]['activity']);
                newResult = result['informationLocalResourceID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    informationLocalResourceID: newResult
                  }, function (err, result) {
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  anExistingActiveArray.push(result['name']);
                  socket.emit('activeError', {
                    user: anExistingActiveArray
                  });
                }
                break;
              case "Evaluation":
                flag = result['trainedEvaluationResourceID'].some((a, b) => {
                  return a === data[0]['activity'];
                }) ? '' : result['trainedEvaluationResourceID'].push(data[0]['activity']);
                newResult = result['trainedEvaluationResourceID'];
                if (flag) {
                  StudentUser.update({
                    userNameID: e['userNameID']
                  }, {
                    trainedEvaluationResourceID: newResult
                  }, function (err, result) {
                    socket.emit('pushSuccess', {
                      code: 1,
                      user: '活动推送成功！'
                    });
                    io.emit('activePush', data);
                  })
                } else {
                  anExistingActiveArray.push(result['name']);
                  socket.emit('activeError', {
                    user: anExistingActiveArray
                  });
                }
                break;
              default:
                return;
            }
          })
        });
      }

    })
  });
  // 教师端锁定学员设备
  socket.on('lock', data => {
    io.emit('userLock', data);
  });
  // 教师端解锁学员设备 
  socket.on('unLock', data => {
    io.emit('userUnLock', data);
  })
  // 教师端同步学员设备 
  socket.on('sync', data => {
    io.emit('userSync', data);
  })
  // 教师端异步学员设备 
  socket.on('async', data => {
    io.emit('userAsync', data);
  })
  // 教师端操作学员设备 
  socket.on('synchronization', data => {
    console.log(data, '[][][][][][][][][[]]');
    io.emit('hronization', data);
  })
  // 教师端同步学员诊断仪 
  socket.on('synchronizationZDY', data => {
    io.emit('ZDY', data);
  })
  // 教师端同步学员踏板 
  socket.on('synchronizationTB', data => {
    io.emit('TB', data);
  })
  // 教师端同步学员仪表板 
  socket.on('synchronizationYBB', data => {
    io.emit('YBB', data);
  })
  // 教师端同步学员万用表
  socket.on('synchronizationWYB', data => {
    console.log(data, '111111');
    io.emit('WYB', data);
  })
  // 教师端操作学员设备 
  socket.on('synchronizationpage', data => {
    io.emit('hronizationpage', data);
  })
  // 监听socket连接断开
  socket.on('disconnect', function () {
    console.log('-链接断开');
  });
});
// CORS跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');

  next();
});
// 设置用户登录过期时间
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "_test",
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  store: new MongoStore({
    url: "mongodb://127.0.0.1/loginData"
  })
}));
// 登录用户刷新过期时间
app.use(function (req, res, next) {
  if (req.session.user) {
    req.session.user.time = new Date().toLocaleString();
    req.session.touch();
    next();
  } else {
    next();
  }
});

// 学员端用户登录路由
app.use('/studentUser', studentUser);
// 教师端用户登录路由
app.use('/teacherUser', teacherUser);

// 获取课程路由
app.use('/courses', courses);

// 获取技术资料路由
app.use('/technicalInformation', technicalInformation);

// 获取活动路由
app.use('/active', active);

// 获取已登录学员路由
app.use('/student', registeredCadets);
// 锁定或解锁学员
app.use('/lock', lock);


server.listen(1818, () => {
  console.log('监听成功');
})
