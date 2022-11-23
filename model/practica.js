module.exports={
    obtener: function (conexion,funcion) {
        conexion.query("SELECT * FROM practicas", funcion);
    },

    retornarDatosID:function (conexion,id,funcion) {
        conexion.query("SELECT * FROM practicas WHERE id = ?", [id], funcion);
    },

    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM practicas WHERE id = ?", [id], funcion);
    },
}