const db = require('../database/conexion.js');

class cursosController {
  constructor() {}

  consultar(req, res) {
    try {
      const { nombre, descripcion, profesor_id } = req.body;
      db.query(`SELECT * FROM cursos`, (err, rows) => {
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
      db.query(`SELECT * FROM cursos where id = ?`, [id], (err, rows) => {
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
      const { nombre, descripcion, profesor_id } = req.body;
      db.query(
        `INSERT INTO cursos (id, nombre, descripcion, profesor_id ) VALUES (NULL, ?, ?, ?)`,
        [ nombre, descripcion, profesor_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
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
      const {nombre, descripcion, profesor_id} = req.body;
      db.query(
        `UPDATE cursos.cursos set  nombre=?, descripcion=?  where id= ?`,
        [nombre, descripcion, profesor_id, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
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
        `DELETE FROM cursos.cursos where id= ?`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
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
  asociarEstudiante(req, res) {
    try {
      const {curso_id, estudiante_id} = req.body;
      db.query(
        `INSERT INTO cursos_estudiantes (curso_id, estudiante_id) values (?, ? )`,
        [curso_id, estudiante_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
          }else{
            res.status(201).json({id: rows.insertId});
          }
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err);
    }
  }
}

module.exports = new cursosController();
