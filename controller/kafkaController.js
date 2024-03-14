const notificationPushService = require("../services/kafkaService");

module.exports.notificationPush = async (req, res, next) => {
  try {
    //console.log("Notification Push controller", req.body, "debug");
    await notificationPushService.notificationPush(req, res);

    next();
  } catch (error) {
    // console.log("Notification Push controller", req.body, "error", error);
    next(error);
  }
};
