//IMPORTO LA VARIABLES DE ENTORNO(DOTENV)
//require('dotenv').config() <--FORMA VIEJA DE IMPORTAR
import 'dotenv/config'

//IMPORTO LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'

//CREAR UN OBJETO DE LA CALSE SERVIDOR
let servidor=new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()

