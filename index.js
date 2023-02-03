const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "YOUR_API_KEY",
});

const openai = new OpenAIApi(config);

const prompt = "A sketch of a cat playing basketball";
const numberOfImages = 1;
const imageSize = "1024x1024";

openai
	.createImage({
		prompt: prompt,
		n: numberOfImages,
		size: imageSize,
	})
	.then((data) => {
		console.log(data.data.data);
	});
