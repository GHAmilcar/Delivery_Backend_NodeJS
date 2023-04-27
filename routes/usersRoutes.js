const UserController = require('../controllers/usersController')

// Aqui los metodos o funciones van sin parentesis
module.exports = (app) => {
    app.get('/api/users/getAll', UserController.getAll)
    app.post('/api/users/create', UserController.register)
}