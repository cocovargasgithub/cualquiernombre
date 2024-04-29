const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config()

module.exports = () => {
    // TODO: Obtiene las variables de entorno
    let host = process.env.DB_HOST;
    let database = process.env.DB_DATABASE
    let user = process.env.DB_USER
    let password = process.env.DB_PASSWORD
    let port = process.env.DB_PORT
    // * Crea una conexion con la base de datos
    return mysql.createConnection({
        host:"baztxrys2ysrlfcy6o96-mysql.services.clever-cloud.com",
        database:"baztxrys2ysrlfcy6o96",
        user:"ugmcvowrtys7ss0q",
        password:"RNURwjXwl0xRh9nPx9VC",
        port:3306
    })
    
}