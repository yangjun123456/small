let express = require("express");
let router = express.Router();
let {
  Course
} = require("../model/mongo");
let fs = require('fs');


// 获取课程列表
router.get('/getCoursesList', (req, res) => {
  console.log('1111');
  Course.findOne({
    name: 'course'
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

module.exports = router;
