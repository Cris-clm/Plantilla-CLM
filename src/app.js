// requerimientos de libreria express
const express=require('express')
//Creamos instancia de express 
const app=express()

//configuramos el servidor para lea BODY'S en application-json
app.use(express.json())

//agregamos la rutas
app.use('/user',require('./router/user.routes'))

//exportamos objeto
module.exports=app 