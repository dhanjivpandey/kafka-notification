const config = require("../config/config.json");

const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: config.consumerClientId,
  brokers: [config.brokers],
});

const consumer = kafka.consumer({ groupId: config.consumergroupId });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: config.kafkatopic, fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("Consumer Message received", {
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
