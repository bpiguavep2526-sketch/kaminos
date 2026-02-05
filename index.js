import {connectionBD} from './backend/server.js';
import  express  from 'express';
import  cors  from 'cors';
import mongoose from 'mongoose';
import usuariosRoutes from './backend/model_routes/usuariosRoutes.js'

const app = express();
app.use(cors());

app.use('/usuarios', usuariosRoutes)

connectionBD();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



