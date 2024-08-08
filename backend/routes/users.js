const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     description: Obtiene la lista de usuarios registrados en la base de datos. Si se proporciona un parámetro `email`, se filtran los resultados por ese correo electrónico.
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Correo electrónico del usuario para filtrar los resultados.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/', userController.get);

module.exports = router;
