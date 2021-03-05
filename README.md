# Apache Kafka Crash Course

Simple example following on from [Apache Kafka Crash Course](https://www.youtube.com/watch?v=R873BlNVUB4) Nov 27, 2019 by [Hussein Nasser](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg).

I had to add `127.0.0.1 kafka` to my hosts file on Windows, I need to look into docker networking more.

Clone the repo, configure local dns, then follow the instructions in the video.

`node .\topic.js` sets up the topic
`node .\producer.js Jim` posts the message Jim to the topic
`node .\consumer.js` starts a consumer, you can start up to two simultaneously and messages starting A-M will go to the consumer for partition 0, others to the consumer for partition 1. The consumer does not shutdown very nicely, eventually the consumer group will be rebalanced and missed messages will appear on the consumer that is still running.