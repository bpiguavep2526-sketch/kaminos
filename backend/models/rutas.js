import mongoose from "mongoose";    
import { I } from "vue-router/dist/index-Cu9B0wDz.mjs";

const rutaSchema = mongoose.Schema({
    nombreRuta: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true 
    },
    urlImagen: {
        type: String,
        required: true 
    },
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});

const Ruta = mongoose.model('Ruta', rutaSchema);
export {Ruta};
