//VERSION VIEJA DE IMPORTAR
//const express = require('express')
//IMPORTO EL FRAMEWORK EXPRESS
import express from 'express'
//importo las rutas del api
import { rutas } from '../routes/rutas.js'
//importo la Conexion a DB
import {conectarConBD} from '../database/conexion.js'
export class Servidor{
    
    constructor(){
        this.app = express()//atributo APP guarda a express
        this.conectarBD()
        this.llamarAuxiliares()//activo midlewares o ayudas
        this.atenderPeticiones()
        
    }


    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor Encendido en ${process.env.PORT}`)
        })
    }

    //ENRUTAR
    atenderPeticiones(){
        this.app.use('/',rutas)
    }

    //Llamar auxiliares(midlewares)
    llamarAuxiliares(){
        this.app.use(express.json()) //ayudante para recibir datos por el body de la peticion
    }

    conectarBD(){
        conectarConBD()
    }
}