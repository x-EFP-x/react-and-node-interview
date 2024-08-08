const User = require('../models/userModel');
const {connectToDatabase, closeConnection } = require('../config/dbConfig');

const userOperations = {};

userOperations.get = async (email)=> {
    try{
        await connectToDatabase();
        let users;
        if (email) {
            users = await User.find({ email: email });
        } else {
            users = await User.find({});
        }
        await closeConnection();
        return (users);
    } catch(error){
        console.error('Error finding users:', error);
        return(error);
    }

} 

module.exports = userOperations;