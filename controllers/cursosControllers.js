const db = require('../database/conexion.js');

class cursosController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "consulta cursos desde clase" });
  }
  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({ msg: `consultarDetalle cursos desde clase ${id}` });
  }
  ingresar(req, res) {
    res.json({ msg: "ingresar cursos desde clase" });
  }
  actualizar(req, res) {
    res.json({ msg: "actualizar cursos desde clase" });
  }
  borrar(req, res) {
    res.json({ msg: "borrar cursos desde clase" });
  }
}

module.exports = new cursosController();
