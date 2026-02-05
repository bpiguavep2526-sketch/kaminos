import mongoose from "mongoose";

const puntoRutaSchema = mongoose.Schema({
    latitud: { 
        type: Double,
        required: true
    }, 
    longitud: {
        type: Double,
        required: true 
    },
    idRuta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ruta',
        required: true
    },
}); 
const PuntoRuta = mongoose.model('PuntoRuta', puntoRutaSchema);
export {PuntoRuta};