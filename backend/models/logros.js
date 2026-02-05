import mongoose from "mongoose";

const logroSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
});
const Logro = mongoose.model('Logro', logroSchema);
export {Logro};