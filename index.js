// New
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "INSERT YOUR OPEN AI API KEY HERE" // This is also the default, can be omitted
});


const prompt = "A sketch of a cat playing basketball";
const numberOfImages = 1;
const imageSize = "1024x1024";

const imageGenaration = await openai.images.generate(	
{
	prompt: prompt,
	n: numberOfImages,
	size: imageSize

}).then((data) => {
	console.log(data);
});
