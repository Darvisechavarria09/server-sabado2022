//CONTROLADOR
//1. resivir las peticiones
//2. ejecutar logica de negocio
//3. llamar a la capa de servicios
//4. enviar las respuestas al cliente
export class ControladorHabitacion{

    constructor(){}

    buscarTodas(request,response){

        let datos=[{nombre:"Darvis", edad:20},{nombre:"Valentina",edad:19}]//borrar despues
        try{//si todo sale bien
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:datos,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos"+error,
                data:[],
                estado:false
            })
        }
    }

    buscarPorId(request,response){
        let datos=[{nombre:"Darvis", edad:20}]//borrar despues
        let id=request.params.id
        console.log(id)
        try{
            response.status(200).json({
                mensaje:"Exito buscando dato por id"+id,
                data:datos,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando datos por id"+error,
                data:[],
                estado:false
            })
        }
    }

    registrar(request,response){}

    editar(request,response){}

    eliminar(request,response){}
}