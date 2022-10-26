module.exports = (app) => {

    const controlador = require("../controladores/pais.controlador");

    app.get("/paises", controlador.listar);
    app.post("/paises/agregar", controlador.agregar);
    app.post("/paises/modificar", controlador.modificar);
    app.delete("/paises/:id", controlador.eliminar);

}