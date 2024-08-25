const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1", // Asegúrate de que sea la dirección IP correcta
  user: "root",     // Verifica que el usuario existe y tiene acceso
  password: "root",   // Asegúrate de que la contraseña es correcta
  database: "cursos", // Asegúrate de que la base de datos existe
  port: 3306,      // Incluir si usas un puerto diferente
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.message);
    return;
  }
  console.log("Base de datos conectada");
});

module.exports = db;
