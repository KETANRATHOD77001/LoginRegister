import mongoose from 'mongoose';
// Create schema for todo
const User = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    email: {
        type: String,
        required: [true, 'Email required'],
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
});

// Create model for todo
const UserModel = mongoose.model('users', User);
export default UserModel;