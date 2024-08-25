class profesoresController {
    constructor() {}
  
    consultar(req, res) {
      res.json({ msg: "consulta profesores desde clase" });
    }
    consultarDetalle(req, res) {
      res.json({ msg: "consultarDetalle profesores desde clase" });
    }
    ingresar(req, res) {
      res.json({ msg: "ingresar profesores desde clase" });
    }
    actualizar(req, res) {
      res.json({ msg: "actualizar profesores desde clase" });
    }
    borrar(req, res) {
      res.json({ msg: "borrar profesores desde clase" });
    }
  }
  
  module.exports = new profesoresController();
  