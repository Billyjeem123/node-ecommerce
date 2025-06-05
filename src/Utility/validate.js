const { validationResult } = require('express-validator');
function handleValidationErrors(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg);
        res.status(400).json({
            success: false,
            errors: errorMessages // array of strings only
        });
        return true; // signal that response was sent
    }
    return false; // no validation errors
}
module.exports = handleValidationErrors;
