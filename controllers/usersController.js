const User = require('../models/user')

module.exports = {

    async getAll(req, res, next){
        try {
            const data = await User.getAll()
            console.log(data)
            return res.status(201).json(data)
        } catch (error) {
            console.log(error)
            return res.status(501).json({
                succes: false,
                message: error
            })
        }
    },

    async register(req, res, next){
        try {
            const user = req.body
            const data = await User.create(user)

            return res.status(201).json({
                succes: true,
                message: `Se ha registrado el usuario: ${data.id}`
            })
        } catch (error) {
            console.log(`Error: ${error}`)
            res.status(501).json({
                succes: false,
                message: 'Error al registrar el usuario',
                error: error
            })
        }
    }

}