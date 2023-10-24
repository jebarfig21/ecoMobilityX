const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Puerto de tu elección
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const cors = require('cors')
const connectDB = require('./config/db') //PENDIENTE


// Middleware para procesar solicitudes JSON
require('dotenv').config()

// CONEXIÓN A DB
connectDB()
// Habilitar CORS
app.use(cors())
// BODY-PARSER
app.use(express.json());

// Configuración de rutas

app.use('/users',userRoutes);
app.use('/products',productRoutes);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});