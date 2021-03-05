const { Kafka } = require("kafkajs");

run();
async function run() {
    try
    {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": [ "localhost:9092" ],
        });

        const admin = kafka.admin();
        console.log("Connecting.....");
        await admin.connect();
        console.log("Connected!");

        console.log("Creating topic.....");
        const topicCreated = await admin.createTopics({
            "topics": [ {
                "topic": "Users",
                "numPartitions": 2,
            } ]
        });
        if (topicCreated)
        {
            console.log("Topic was created");
        }
        await admin.disconnect();
    }
    catch (ex)
    {
        console.error(`Something bad happened ${ex}`);
    }
    finally
    {
        process.exit();
    }
}