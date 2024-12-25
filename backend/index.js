import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());


const corsOptions = {
    origin: 'http://localhost:5173', // Solo permitir este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Si necesitas enviar cookies o autenticación
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // Habilita CORS con las opciones previamente definidas

app.get('/api/hola', (req, res) => {
    res.send('Hola Mundo');
})

app.post('/api/user', (req, res) => {
    const newuser = req.body;
    
    const filePath = '../src/data/user.json';
    let users = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        users = JSON.parse(data);
    }

    const userExists = users.some(
        (user) => user.phone === newuser.phone
    );

    if (userExists) {
        res.status(400).json({ message: 'Hay un usuario registrado con este telefono.' });
        return;
    }

    users.push(newuser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
    res.status(201).json({ message: 'Registro de usuario exitoso.' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});