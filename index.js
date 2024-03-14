// Producer
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const kController = require("./controller/kafkaController");
const responseHandler = require("./responseHandler");
const errorHandler = require("./errorHandler");

// Use the body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the body-parser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));
const Consumer = require("./services/consumer"); // call kafka consumer
app.post("/pushnotification", kController.notificationPush);
// Response handler
//app.use(responseHandler);
// Error handler
//app.use(errorHandler);
// Start the express app
app.listen(3000, () => {
  console.log("Crimson Interactive Kafka Notification running on port 3000!");
});
