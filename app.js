const cors = require('cors');
const express=require('express');
const app=express();
app.use(cors());

//Conectarse a la base de datos
const bd = require('./modelos/bd');
bd.conectar();

//permite recibir y exportar información en formato JSON
app.use(express.json());

//Incluir las rutas disponibles para los metodos de la API
require('./rutas/pais.rutas')(app);
require('./rutas/region.rutas')(app);
require('./rutas/ciudad.rutas')(app);

const puerto=3030;

app.listen(puerto, () => {
    console.log(`API escuchando por el puerto ${puerto}`)
});
