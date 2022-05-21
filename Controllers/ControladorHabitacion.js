//CONTROLADOR
//1. resivir las peticiones
//2. ejecutar logica de negocio
//3. llamar a la capa de servicios
//4. enviar las respuestas al cliente

// importo el servicio
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}

    async buscarTodas(request,response){
        let servicioHabitacion=new ServicioHabitacion()
        try{//si todo sale bien
            response.status(200).json({
                mensaje:"Exito buscando los datos ",
                data:await servicioHabitacion.buscarTodas(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos "+error,
                data:[],
                estado:false
            })
        }
    }

    async buscarPorId(request,response){
        let servicioHabitacion=new ServicioHabitacion()
        let id=request.params.id
        try{
            response.status(200).json({
                mensaje:"Exito buscando dato por id "+id,
                data:await servicioHabitacion.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando datos por id "+error,
                data:[],
                estado:false
            })
        }
    }

    async registrar(request,response){
        let servicioHabitacion=new ServicioHabitacion()
        let datosPeticion=request.body
        try{
            await servicioHabitacion.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la habitacion ",
                data:null,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error agregando la habitacion "+error,
                data:[],
                estado:false
            })
        }
    }

    async editar(request,response){
        let servicioHabitacion=new ServicioHabitacion()
        let id=request.params.id
        let datosPeticion=request.body
        
        try{
            await servicioHabitacion.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la habitacion "+id,
                data:null,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error editando la habitacion "+error,
                data:[],
                estado:false
            })
        }
    }

    async eliminar(request,response){
        let servicioHabitacion=new ServicioHabitacion()
        let id=request.params.id

        try{
            await servicioHabitacion.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la habitacion "+id,
                data:null,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error eliminando la habitacion "+error,
                data:[],
                estado:false
            })
        }
    }
}