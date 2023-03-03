const db = require('../config/firebase');

module.exports={
    getAll: function (conexion,funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },
}
