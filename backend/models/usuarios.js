import mongoose from "mongoose";

const usuariosSchema = mongoose.Schema({
    nomUsuario: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    },
    urlFotoPerfil: {
        type: String,
        required: [true]
    }
})

const usuario = mongoose.model("usuarios", usuariosSchema, "usuarios")
export {usuario}