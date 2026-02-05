import App from '@/App.vue';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const usuarioSchema = {
    nomUsuario: String,
    email: String,
    password: String,
    urlFotoPerfil: String
};

const modeloUsuario = mongoose.model('usuarios', usuarioSchema);



