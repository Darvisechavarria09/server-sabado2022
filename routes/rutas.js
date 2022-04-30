import express from 'express'
//importo el controlador de habitaciones
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
//creo un objeto de la clase ControladorHabitacion
let controladorHabitacion=new ControladorHabitacion()

//utilizo el metodo Router() de express
export let rutas=express.Router()
//Lista de servicios que ofrece el api
rutas.get('/api/v1/sabado',controladorHabitacion.buscarTodas)
rutas.get('/api/v1/sabado/:id',controladorHabitacion.buscarPorId)
rutas.post('/api/v1/sabado',controladorHabitacion.registrar)
rutas.put('/api/v1/sabado/:id',controladorHabitacion.editar)
rutas.delete('/api/v1/sabado/:id', controladorHabitacion.eliminar)