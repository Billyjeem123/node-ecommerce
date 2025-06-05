const UserModel = require('../models/User');
const handleValidationErrors = require("../Utility/validate");
const UserResource = require('../resources/UserResource');

class UserController {
    static async signup(req, res, next) {
        try {
            if (handleValidationErrors(req, res)) return;
            const { firstname, lastname, email, password } = req.body
            // Check if user already exists
            const existingUser = await UserModel.findOne({ email })

            if (existingUser) {
                return res.status(200).json({
                    success: true,
                    message: 'User already exists.',
                    data: UserResource.toJson(existingUser)
                })
            }

            // Create a new user
            const newUser = new UserModel({ firstname, lastname, email, password })
            await newUser.save()

            res.status(201).json({
                success: true,
                message: 'User created successfully.',
                data: newUser
            })
        } catch (error) {
            next(error) // Pass error to global error handler
        }
    }

    static async allusers(req, res, next) {
        try {
            const users = await UserModel.find() // Fetch all users

            return res.status(200).json({
                success: true,
                message: 'All users fetched successfully.',
                data: UserResource.collection(users)
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateUser(req, res, next) {
        try {
            const userId = req.params.id
            const updateData = req.body

            const updatedUser = await UserModel.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            )

            if (!updatedUser) {
                return res.status(404).json({ success: false, message: 'User not found.' })
            }

            res.status(200).json({
                success: true,
                message: 'User updated successfully.',
                data: updatedUser
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const userId = req.params.id

            const deletedUser = await UserModel.findByIdAndDelete(userId)

            if (!deletedUser) {
                return res.status(404).json({ success: false, message: 'User not found.' })
            }

            res.status(200).json({
                success: true,
                message: 'User deleted successfully.'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
