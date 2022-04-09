//VERSION VIEJA DE IMPORTAR
//const express = require('express')
//IMPORTO EL FRAMEWORK EXPRESS
import express from 'express'

export class Servidor{
    
    constructor(){
        this.app = express()//atributo APP guarda a express
        this.atenderPeticiones()
    }


    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor Encendido en ${process.env.PORT}`)
        })
    }

    //ENRUTAR
    atenderPeticiones(){
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un GET')
        })

        this.app.get('/api/v1/sabado/:id', function (req, res) {
            res.send('Hola soy un GET')
        })

        this.app.post('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un POST')
        })

        this.app.put('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un PUT')
        })

        this.app.delete('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un DELETE')
        })
    }
}