const express=require('express')
const app=express.Router()

//http:localhost:3500/user/
app.get('/',(req,res)=>{
    res.status(200).json({succes:true,mensaje:'hola mundo de la Programación'})
})

//http:localhost:3500/user/agregarUsuario

app.get('/agregarUsuario',(req,res)=>{
    res.status(200).json({succes:true,mensaje:'hola mundo de la Programación, hoy estaremos agregando un usuario'})
})

module.exports=app