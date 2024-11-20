const pais = require('../modelos/pais.modelo')

exports.listar = (req, res) => {
    pais.listar((error, datos) => {
        if (error) {
            return res.status(500).send(
                { mensaje: 'Error obteniendo la lista de paises' }
            );
        }
        return res.send(datos);
    });

}

exports.agregar = (req, res) => {
    //Validar que se recibe un objeto
    if (!req.body || !req.body.id || !req.body.nombre) {
        return res.status(400).send(
            { mensaje: 'El contenido de la solicitud debe incluir el país' }
        );
    }

    pais.agregar(req.body,
        (error, datos) => {
            if (error) {
                return res.status(500).send(
                    { mensaje: 'Error agregando país' }
                );
            }
            return res.send(datos);
        });
}

exports.modificar = (req, res) => {
    //Validar que se recibe un objeto
    if (!req.body || !req.body.id || !req.body.nombre) {
        return res.status(400).send(
            { mensaje: 'El contenido de la solicitud debe incluir el país' }
        );
    }

    pais.modificar(req.body,
        (error, datos) => {
            if (error) {
                return res.status(500).send(
                    { mensaje: 'Error modificando país' }
                );
            }
            return res.send(datos);
        });
}

exports.eliminar = (req, res) => {
    pais.eliminar(req.params.id,
        (error, datos) => {
            if (error) {
                return res.status(500).send(
                    { mensaje: 'Error eliminando país' }
                );
            }
            return res.send(datos);
        });
}

exports.capital = (req, res) => {
    pais.capital(req.params.pais, (error, dato) => {

        if (error) {
            return res.status(500).send(
                { mensaje: 'Error obteniendo la capital del pais' }
            );
        }
        return res.send(dato);
    });
}