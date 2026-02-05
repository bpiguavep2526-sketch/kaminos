import mongoose from "mongoose";

const logroUserSchema = mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Usuario',
        required: true
    },
    idLogro:{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Logro',
        required: true
    },
});
const LogroUser = mongoose.model('LogroUser', logroUserSchema);
export {LogroUser};