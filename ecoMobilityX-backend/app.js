const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Puerto de tu elección
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Configuración de rutas

app.use('/users',userRoutes);
app.use('/products',productRoutes);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});