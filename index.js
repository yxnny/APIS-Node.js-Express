const express = require('express');
const cors = require('cors');
const app = express();

const entudiantesRoutes = require('./routes/entudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
  res.send('Hola mundo :d');
});

app.use('/estudiantes', entudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

const PUERTO = 3000;
app.listen(PUERTO, ()=>{
  console.log(`Se escucha el puerto ente ${PUERTO}`)
});