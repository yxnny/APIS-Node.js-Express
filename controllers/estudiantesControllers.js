class estudiantesController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "consulta estudiantes desde clase" });
  }
  consultarDetalle(req, res) {
    const {id} = req.params;
    res.json({ msg: `consultarDetalle estudiantes desde clase ${id}` });
  }
  ingresar(req, res) {
    res.json({ msg: "ingresar estudiantes desde clase" });
  }
  actualizar(req, res) {
    res.json({ msg: "actualizar estudiantes desde clase" });
  }
  borrar(req, res) {
    res.json({ msg: "borrar estudiantes desde clase" });
  }
}

module.exports = new estudiantesController();
