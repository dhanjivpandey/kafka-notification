const config = require("../config/config.json");
const produceMessage = require("./producer");
const consumeMessages = require("./consumer");

module.exports.notificationPush = async (req, res) => {
  let _body = req.body;

  if (Object.keys(_body).length) {
    const message = _body;
    try {
      // producer call
      produceMessage(config.kafkatopic, message);

      res.status(200).send({
        success: true,
        error: false,
        message: "Notification Push Successfully",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        error: true,
        message: error.message,
      });
    }
  } else {
    res.status(500).send({
      success: false,
      error: true,
      message: "Something Wrong Happened",
    });
  }
};
