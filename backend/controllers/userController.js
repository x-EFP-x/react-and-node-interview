const userOperations = require('../operations/userOperations');

const userController = {}

userController.get = async (req, res) => {
    try {
        const { email } = req.query;
        const result = await userOperations.get(email);

        res.status(200).json(result);
    } catch (err) {
        console.error('Error finding users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = userController;


