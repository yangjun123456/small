let mongoose = require("mongoose");
let conn = mongoose.createConnection("mongodb://127.0.0.1/loginData");
// 学员端登录数据库模型骨架
let StudentUserSchema = new mongoose.Schema({
  name: String,
  company: String,
  position: String,
  username: String,
  userNameID: String,
  passWordID: String,
  avatar: String,
  param: Object,
  activityPushID: Array,
  informationHITSResourceID: Array,
  informationLocalResourceID: Array,
  trainedEvaluationResourceID: Array,
});
// 教师端登录数据库模型骨架
let TeacherUserSchema = new mongoose.Schema({
  name: String,
  company: String,
  position: String,
  username: String,
  userNameID: String,
  passWordID: String,
  avatar: String,
});
// 教师端获取已登录学员数据库模型骨架
let UserActiveSchema = new mongoose.Schema({
  devicesAry: Array
});
// 已登录教师数据库模型骨架
let TeachterActiveSchema = new mongoose.Schema({
  devicesAry: Array
});
// 课程选择数据库模型骨架
let CourseSchema = new mongoose.Schema({
  name: Array,
  course: Array,
});
// 技术资料数据库模型骨架
let TechnicalInformationSchema = new mongoose.Schema({
  name: String,
  technicalInformation: Array,
});
// 教师端获取已有活动推送数据库模型骨架
let ActivePushPageSchema = new mongoose.Schema({
  name: String,
  active: Array,
});
// 教师端获取已有信息推送HITS数据库模型骨架
let InformationPushPageSchema = new mongoose.Schema({
  name: String,
  active: Array,
});
// 教师端获取已有资源推送LOCAL数据库模型骨架
let ResourcePushPageSchema = new mongoose.Schema({
  name: String,
  active: Array,
});
// 教师端获取已有资源推送LOCAL数据库模型骨架
let EvaluationPageSchema = new mongoose.Schema({
  name: String,
  active: Array,
});
// 
let UserImageSchema = new mongoose.Schema({
  images: Array
});

// 定义Schema构造生成的模型
let StudentUser = conn.model("StudentUser", StudentUserSchema);
let TeacherUser = conn.model("TeacherUser", TeacherUserSchema);
let UserActive = conn.model("UserActive", UserActiveSchema);
let TeachterActive = conn.model("TeachterActive", TeachterActiveSchema);
let Course = conn.model("Course", CourseSchema);
let TechnicalInformation = conn.model("TechnicalInformation", TechnicalInformationSchema);
let ActivePushPage = conn.model("activepushpage", ActivePushPageSchema);
let InformationPushPage = conn.model("InformationPushPage", InformationPushPageSchema);
let ResourcePushPage = conn.model("ResourcePushPage", ResourcePushPageSchema);
let Evaluation = conn.model("Evaluation", EvaluationPageSchema);
let UserImage = conn.model("UserImage", UserImageSchema);

// 导出
exports.StudentUser = StudentUser;
exports.TeacherUser = TeacherUser;
exports.Course = Course;
exports.TechnicalInformation = TechnicalInformation;
exports.ActivePushPage = ActivePushPage;
exports.InformationPushPage = InformationPushPage;
exports.ResourcePushPage = ResourcePushPage;
exports.Evaluation = Evaluation;
exports.UserActive = UserActive;
exports.TeachterActive = TeachterActive;
exports.UserImage = UserImage;
