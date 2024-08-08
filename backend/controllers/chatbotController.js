const OpenAI = require('openai');
const initialMessage = 'Se te haran preguntas acerca de articulos, por favor da toda la informacion posible y actua como un experto en el tema. Por favor, no des respuestas muy largas';

const chatbotController = {};

chatbotController.GPTdemo = async (req, res) => {
    let query = req.body.message;
    console.log(query);
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const messages = [
        { role: 'system', content: initialMessage },
        { role: 'user', content: query }
    ];

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages
        });

        console.log(completion.choices[0].message.content);
        res.send(200, completion.choices[0].message.content)

    } catch (error) {
        console.error('Error al procesar el texto:', error);
    }
};

module.exports = chatbotController;