const articleOperations = require('../operations/articleOperations');

const articleController = {}

articleController.get = async (req, res) => {
    try {

        const result = await articleOperations.get();

        res.status(200).json(result);

    } catch (err) {
        console.error('Error finding users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = articleController;