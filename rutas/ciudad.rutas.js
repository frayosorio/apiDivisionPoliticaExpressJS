module.exports = (app) => {

    const controlCiudad = require('../controladores/ciudad.controlador');

    //metodo de la API que obtiene la lista de ciudades
    app.get("/ciudades/:id/:nombre", controlCiudad.listar);

    //metodo de la API que agrega (INSERT) una región
    app.post("/ciudades/agregar/:id/:nombreregion", controlCiudad.agregar);

    //metodo de la API que modifica (UPDATE) una región
    app.post("/ciudades/modificar/:id/:nombreregion", controlCiudad.modificar);

    //metodo de la API que elimina (DELETE) una región
    app.delete("/ciudades/:id/:nombreregion/:nombreciudad", controlCiudad.eliminar);

}