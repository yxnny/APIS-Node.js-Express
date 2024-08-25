const db = require("../database/conexion.js");
class profesoresController {
  constructor() {}

  consultar(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      db.query(`SELECT * FROM profesores`, (err, rows) => {
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
      db.query(`SELECT * FROM profesores where id = ?`, [id], (err, rows) => {
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
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `INSERT INTO profesores (id, dni, nombre, apellido, email, profesion, telefono) VALUES (NULL, ?, ?, ?, ?,?,?)`,
        [dni, nombre, apellido, email, profesion, telefono],
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
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;
      db.query(
        `UPDATE cursos.profesores set dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=? where id= ?`,
        [dni, nombre, apellido, email, profesion, telefono, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }

          if (rows.affectedRows === 1) {
            res
              .status(200)
              .json({ respuesta: "Registro actuallzado con exito" });
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
        `DELETE FROM cursos.profesores where id= ?`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }

          if (rows.affectedRows === 1) {
            res.status(200).json({ respuesta: "Eliminado con exito" });
          }
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }
}

module.exports = new profesoresController();
