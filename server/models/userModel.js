import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    favorites: {type: Array, required: false},
});

const User = mongoose.model('user', userSchema);

// module.exports = User; when using require();
export default User;