const { Consumer } = require("sqs-consumer");
const AWS = require("aws-sdk");

module.exports = {
	name: "sqs-consumer",
	started() {
		AWS.config.update({
			region: "..", // TODO: Input your region
			accessKeyId: "...", // TODO: input your AWS access key here
			secretAccessKey: "..." // TODO: input your AWS secret key here
		});

		// sqs-consumer goes here
		const app = Consumer.create({
			queueUrl: "https://....", // TODO: Input your AWS SQS queue url here
			handleMessage: async (message) => {
				// do some work with `message`
				console.log("Message111 ===>", message);
			}
		});

		app.on("error", (err) => {
			console.error(err.message);
		});

		app.on("processing_error", (err) => {
			console.error(err.message);
		});

		app.start();
	}
};