const bd = require('./bd')

const Pais = function () { }

Pais.listar = function (respuesta) {
    const basedatos = bd.obtenerBD();

    //***** codigo MONGO para listar los paises
    basedatos.collection('paises')
        .find()
        .project(
            {
                id: 1,
                nombre: 1,
                continente: 1,
                tipoRegion: 1,
                codigoAlfa2: 1,
                codigoAlfa3: 1
            }
        )
        //*****
        .toArray(
            function (error, resultado) {
                if (error) {
                    console.log('Error listando los paises ', error);
                    respuesta(error, null);
                }
                else {
                    respuesta(null, resultado);
                }
            }
        );
    ;
}

Pais.agregar = function (pais, respuesta) {
    const basedatos = bd.obtenerBD();

    //***** codigo MONGO para agregar un Documento Pais
    basedatos.collection('paises')
        .insertOne({
            id: pais.id,
            nombre: pais.nombre,
            tipoRegion: pais.tipoRegion,
            continente: pais.continente,
            codigoAlfa2: pais.codigoAlfa2,
            codigoAlfa3: pais.codigoAlfa3
        }
            //*****
            , function (error, resultado) {
                if (error) {
                    console.log('Error agregando país ', error);
                    respuesta(error, null);
                }
                else {
                    respuesta(null, pais);
                }
            }

        );
}

Pais.modificar = function (pais, respuesta) {
    const basedatos = bd.obtenerBD();

    //***** codigo MONGO para moidifcar un Documento Pais
    basedatos.collection('paises')
        .updateOne(
            { id: pais.id },
            {
                $set: {
                    nombre: pais.nombre,
                    tipoRegion: pais.tipoRegion,
                    continente: pais.continente,
                    codigoAlfa2: pais.codigoAlfa2,
                    codigoAlfa3: pais.codigoAlfa3
                }
            }
            //*****
            , function (error, resultado) {
                if (error) {
                    console.log('Error modificando país ', error);
                    respuesta(error, null);
                }
                else {
                    respuesta(null, pais);
                }
            }

        );
}

Pais.eliminar = function (idPais, respuesta) {
    const basedatos = bd.obtenerBD();

    //***** codigo MONGO para eliminar un Documento Pais
    basedatos.collection('paises')
        .deleteOne(
            { id: eval(idPais) }
            //*****
            , function (error, resultado) {
                if (error) {
                    console.log('Error eliminando país ', error);
                    respuesta(error, null);
                }
                else {
                    if(resultado.deleteCount==0){
                        console.log('No se eliminó el país por no encontrarse');
                        respuesta({ mensaje: "País no encontrado"}, null);
                    }
                    else{
                        console.log(`Se eliminó el país con id:${idPais}`);
                        respuesta(null, { mensaje: `Se eliminó el país con id:${idPais}` });
                    }
                }
            }
        );
}

module.exports = Pais;