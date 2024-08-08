const express = require('express');
const articleController = require('../controllers/articleControllers');

const router = express.Router();

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Obtiene todos los artículos
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Lista de artículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   author:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   url:
 *                     type: string
 *                   urlToImage:
 *                     type: string
 *                   publishedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', articleController.get);

module.exports = router;
