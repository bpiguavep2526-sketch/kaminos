import {connectionBD} from './backend/server.js';
import  express  from 'express';
import  cors  from 'cors';

const app = express();
app.use(cors());

connectionBD();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get('/hola', (req, res) => {
    res.send("Hey, buena esa máquina! A tope!");
});


