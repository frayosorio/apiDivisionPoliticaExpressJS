//cargar el modelo de ciudades
const ciudad = require('../modelos/ciudad.modelo');

//metodo web para obtener la lista de regiones
exports.listar = (req, res) => {
    ciudad.listar(req.params.id, req.params.nombre, (err, datos) => {
        //Verificar si hubo error
        if (err) {
            return res.status(500).send({ mensaje: 'Error obteniendo la lista de ciudades' });
        }
        else {
            //devolver los registros obtenidos
            return res.send(datos);
        }
    }
    );
}

//Metodo web para agregar un ciudad
exports.agregar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        return res.status(400).send({ message: 'El contenido del mensaje debe tener información con la Ciudad' });
    }

    ciudad.agregar(req.params.id, req.params.nombreregion, req.body,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                return res.status(500).send({ mensaje: 'Error agregando la Ciudad' });
            }
            else {
                //Se devuelve el registro actualizado
                return res.send(data);
            }
        }
    );
}


//Metodo web para actualizar un region
exports.modificar = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        return res.status(400).send({ message: 'El contenido del mensaje debe tener información con la Ciudad' });
    }

    ciudad.modificar(req.params.id, req.params.nombre, req.body,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                return res.status(500).send({ mensaje: 'Error actualizando la Ciudad ' });
            }
            else {
                //Se devuelve el registro actualizado
                return res.send(data);
            }
        });
}

//Metodo web para eliminar una region
exports.eliminar = (req, res) => {
    ciudad.eliminar(req.params.id, req.params.nombreregion, req.params.nombreciudad,
        (err, data) => {
            //Verificar si hubo error
            if (err) {
                res.status(500).send({ mensaje: 'Error eliminando la Ciudad ' });
            }
            else {
                //Se devuelve mensaje
                res.send({ mensaje: `La Ciudad con nombre:${req.params.nombreCiudad} fue eliminada` });
            }
        });
}
