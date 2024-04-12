require("dotenv").config();
const OpenAI = require("openai").OpenAI;
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const inputLanguage = "german";
const outputLanguage = "english";

const german =
  "Eine luxuriöse, schnell einziehende Creme, die die Augenpartie und Lippen von innen heraus neu konturiert und sichtbar jünger wirken lässt. Der kostbare Sea Emerald V.S. Komplex lässt die Haut praller und straffer aussehen. Man fühlt es auch.\
Die Augenpartie wirkt strahlender, jugendlicher und regeneriert. Linien, Falten und dunkle Augenschatten werden minimiert. Die Haut fühlt sich straffer an, wirkt wie geliftet. Lippen wirken voller, glatter und dadurch jugendlicher.";

const english =
  "A luxurious, fast absorbing cream to visibly reshape eye and lip youthfulness from within. Infused with the Sea Emerald V.S. Complex, this formula helps skin look and feel more Volumized and Structured. The eye area looks brightened and reshaped: lines and wrinkles are reduced; skin feels firmer and looks more lifted, and dark circles are less visible. Lip area looks rejuvenated and smoothed.";

const inputText =
  "Die Lash Sensational Sky High Mascara sorgt für extreme Länge und volles Volumen. Die Sky High greift dank der Tower Flex Bürste und Formel mit Bambusextrakt jede einzelne Wimper.";

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful translator.",
      },
      {
        role: "user",
        content: `Please translate the input from ${inputLanguage} to  ${outputLanguage}. \
        Please find here an example: from german : ${german} to english: ${english}`,
      },
      {
        role: "user",
        content: `Based on this, please translate the following text from ${inputLanguage} to  ${outputLanguage}: \
        ${inputText}`,
      },
    ],
  });
  console.log(response);
  console.log(response.choices[0].message.content);
}

main();
