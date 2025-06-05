const { body } = require('express-validator');

class GlobalRequest {
    static signup() {
        return [
            body('firstname').notEmpty().withMessage('First name is required'),
            body('lastname').notEmpty().withMessage('Last name is required'),
            body('email').isEmail().withMessage('Invalid email address'),
            body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters'),
        ];
    }
}

module.exports = GlobalRequest;
