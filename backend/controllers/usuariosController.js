import { usuario } from "../models/usuarios.js";

const getUsers = async (req, res) => {
    try{
        const users = await usuario.find({});
        console.log("Usuarios encontrados:", users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getUsers}