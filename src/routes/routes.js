const express = require('express')
const  UserController = require('../controllers/UserController')
const  GlobalRequest = require('../validator/GlobalRequest');
class Router {
    constructor() {
        this.router = express.Router()
        this.getRoutes()
    }

    getRoutes() {

        this.router.post('/create', GlobalRequest.signup(), UserController.signup)
        this.router.get('/all', UserController.allusers)
        this.router.put('/update/:id', UserController.updateUser)   // Update user by ID
        this.router.delete('/delete/:id', UserController.deleteUser) // Delete user by ID
    }
}

module.exports = new Router().router
