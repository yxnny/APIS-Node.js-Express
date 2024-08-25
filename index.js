const express = require('express');
const app = express();
const entudiantesRoutes = require('./routes/entudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');


app.get('/',(req,res)=>{
  res.send('Hola mundo :d');
});

app.use('/estudiantes', entudiantesRoutes);
app.use('/profesores', profesoresRoutes);

const PUERTO = 3000;
app.listen(PUERTO, ()=>{
  console.log(`Se escucha el puerto ente ${PUERTO}`)
});