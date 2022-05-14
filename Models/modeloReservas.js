import mongoose from "mongoose";


const Schema = mongoose.Schema;//ESQUEMA DE DATOS(que datos tiene mi modelo)

//CREO MI PROPIO ESQUEMA DE DATOS
const Reserva=new Schema({{
    idCliente:{
        type:String,
        required:true
    },
    tarjetaCredito:{
        Type:String,
        required:true
    },
    fechaIngreso:{
        Type:Date,
        required:true
    },
    fechaSalida:{
        Type:Date,
        required:true
    },
    idHabitacion:{
        Type:String,
        required:true
    },
    costo:{
        Type:Number,
        required:true
    }
})

//se envia el modelo de datos
export const modeloReserva = mongoose.model('reserva', Reserva)