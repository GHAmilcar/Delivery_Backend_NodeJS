const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const logger = require('morgan')
const cors = require('cors')


/* Rutas Usuarios*/
const users = require('./routes/usersRoutes')


const port = process.env.PORT || 3000
app.set('port', port)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.disable('x-powered-by')


// Llamando a las rutas
users(app)

server.listen(3000, '192.168.1.3' || 'localhost', function () {
    console.log(`Aplicacion de NodeJS ${port} Iniciada...`)
})



// Manejo de errores

app.use((err, req, res, next) =>{
    console.log(err)
    res.status(err.status || 500).send(err.stack)
})

module.exports = {
    app: app,
    server: server
}
