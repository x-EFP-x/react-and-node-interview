const express = require('express');
const chatbotController = require('../controllers/chatbotController');

const router = express.Router();
/**
 * @swagger
 * /chatbot:
 *   post:
 *     summary: Enviar un mensaje al chatbot
 *     description: Envía un mensaje al chatbot que utiliza el modelo GPT-4 para generar una respuesta.
 *     tags: [Chatbot]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "¿Cómo está el clima hoy?"
 *                 description: El mensaje que se enviará al chatbot.
 *     responses:
 *       200:
 *         description: Respuesta generada por el chatbot.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "El clima hoy es soleado con una temperatura de 25°C."
 *       400:
 *         description: Solicitud incorrecta, posiblemente falta el mensaje.
 *       500:
 *         description: Error interno del servidor al procesar el mensaje.
 */
router.post('/', chatbotController.GPTdemo);

module.exports = router;
