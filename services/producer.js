const config = require("../config/config.json");
const { Kafka } = require("kafkajs");
const topic = config.kafkatopic;
const kafka = new Kafka({
  clientId: config.producerClientId,
  brokers: [config.brokers],
});

const producer = kafka.producer();

async function produceMessage(topic, message) {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    console.log("Producer Message sent:", message);
  } catch (error) {
    console.error("Error producing message:", error);
    throw Error(error);
  } finally {
    await producer.disconnect();
  }
}

module.exports = produceMessage;
