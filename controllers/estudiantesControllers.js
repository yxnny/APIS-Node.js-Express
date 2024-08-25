const db = require("../database/conexion.js");
class estudiantesController {
  constructor() {}

  consultar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(`SELECT * FROM estudiantes`, (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      db.query(`SELECT * FROM estudiantes where id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows[0]);
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }

  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `INSERT INTO estudiantes (id, dni, nombre, apellido, email) VALUES (NULL, ?, ?, ?, ?)`,
        [dni, nombre, apellido, email],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json({ id: rows.insertId });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }
  actualizar(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(
        `UPDATE cursos.estudiantes set dni=?, nombre=?, apellido=?, email=? where id= ?`,
        [dni, nombre, apellido, email, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }

          if(rows.affectedRows=== 1){
            res.status(200).json({ respuesta: 'Registro actuallzado con exito'});
          }
          
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }

  borrar(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `DELETE FROM cursos.estudiantes where id= ?`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }

          if(rows.affectedRows=== 1){
            res.status(200).json({ respuesta: 'Eliminado con exito'});
          }
          
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }
}

module.exports = new estudiantesController();
