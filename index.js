const express = require('express')

const app = express()

const Contenedor = require('./contenedor/Contenedor')

const contenedor = new Contenedor('./productos.txt')

const PORT = 8080

//End point productos

app.get('/', (req, res)=>{
    //manejar peticiones y respuestas
    contenedor.getAll()
    .then(data=>res.send(data))
    .catch((err)=>{res.send([])})
})

//End point productos random

app.get('/productoRandom', (req,res)=>{
    contenedor.getRandom()
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{res.send([])})
})

const server = app.listen(PORT,()=>{
    console.log(`Se está escuchando el puerto ${PORT}`)
})

server.on("error",error=>{
    console.log(`Error en el servidor: ${error}`)
})