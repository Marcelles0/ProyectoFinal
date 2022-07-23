const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const members = require('./Controller/memberController');
const login = require('./Controller/loginController');

// Acceso a la variable de entorno
require('dotenv').config();

// La cadena de conexión a la base de datos
const conn = process.env.DATABASE_URL;
const port = 8000;

// Conexión a la base de datos
mongoose.connect(conn);
const database = mongoose.connection;

// Verificar la conexión a la base de datos
database.on('error', (error)=>{
    console.log(error);
});
database.once('connected', ()=>{
    console.log('Successfully connected');
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/members', members);
app.use('/login', login);

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})