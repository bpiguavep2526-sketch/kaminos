import mongoose from "mongoose";

const lugarSchema = mongoose.Schema({
    nombreLugar: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}); 

const Lugar = mongoose.model('Lugar', lugarSchema);
export {Lugar};