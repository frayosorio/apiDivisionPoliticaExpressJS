module.exports = (app) => {

    const controlCiudad = require('../controladores/ciudad.controlador');

    //metodo de la API que obtiene la lista de ciudades
    app.get("/ciudades/:id/:nombreregion", controlCiudad.listar);

    //metodo de la API que agrega (INSERT) una región
    app.post("/ciudades/:id/:nombreregion", controlCiudad.agregar);

    //metodo de la API que modifica (UPDATE) una región
    app.put("/ciudades/:id/:nombreregion", controlCiudad.modificar);

    //metodo de la API que elimina (DELETE) una región
    app.delete("/ciudades/:id/:nombreregion/:nombreciudad", controlCiudad.eliminar);

}