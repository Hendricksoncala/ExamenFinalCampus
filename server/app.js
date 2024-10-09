const express = require('express');
const cors = require('cors');
const ConnectToDatabase = require('./infrastructure/mongodb'); // Tu clase para conectar a MongoDB

const express = require('express');
const session = require('express-session');

// requerido para archivos estáticos
const helmet = require('helmet');
const path = require('path');

// configuracion para login
const passport = require('passport');
require('./iniciosesion/infrastructure/config/passportGoogle');
require('./iniciosesion/infrastructure/config/passportGitHub');
require('./iniciosesion/infrastructure/config/passportDiscord');


const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const host = process.env.EXPRESS_HOST || 'localhost';

// Middleware
app.use(cors());
app.use(express.json()); 

// Conexión a la base de datos
const db = new ConnectToDatabase();
db.connect();

// Rutas
app.use("/user", routerUsusarios); // Rutas para los usuarios
app.use("/inicioSesion", routerInicioSesion); // Rutas de inicio de sesión
app.use('/product', Varificacion.isAuthenticated, routerProductos);

app.listen(port, host, () => {
  console.log(`Servidor escuchando en http://${host}:${port}`);
});