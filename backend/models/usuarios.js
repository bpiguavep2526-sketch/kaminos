import App from '@/App.vue';
import mongoose from 'mongoose';
import { U } from 'vue-router/dist/index-Cu9B0wDz.mjs';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const usuarioSchema = mongoose.Schema({
    nomUsuario:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    URLFotoPerfil:{
        type: String,
        required: true
    },
});
const Usuario = mongoose.model('Usuario', usuarioSchema);
export {Usuario};

    
    




