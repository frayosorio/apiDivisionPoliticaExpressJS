module.exports = (app) => {

    const controlRegion = require('../controladores/region.controlador');

    //metodo de la API que obtiene la lista de regiones
    app.get("/regiones/:id", controlRegion.listar);

    //metodo de la API que agrega (INSERT) una región
    app.post("/regiones/agregar/:id", controlRegion.agregar);

    //metodo de la API que modifica (UPDATE) una región
    app.post("/regiones/modificar/:id/:nombre", controlRegion.modificar);

    //metodo de la API que elimina (DELETE) una región
    app.delete("/regiones/:id/:nombre", controlRegion.eliminar);

}