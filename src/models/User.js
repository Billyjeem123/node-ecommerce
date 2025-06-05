const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // prevents duplicate emails
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user', // you can customize default role here
    },
}, {
    timestamps: true, // adds createdAt and updatedAt automatically
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
