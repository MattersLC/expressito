module.exports={
    getUsers: function (conexion,funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },
    
    obtener: function (conexion,funcion) {
        conexion.query("SELECT * FROM practicas", funcion);
    },

    retornarDatosID:function (conexion,id,funcion) {
        conexion.query("SELECT * FROM practicas WHERE id = ?", [id], funcion);
    },

    authUser:function (conexion,email,password,funcion) {
        conexion.query("SELECT * FROM usuarios WHERE WHERE email = ? AND password = ?", [email], [password], funcion);
    },

    borrar:function (conexion,id,funcion) {
        conexion.query("DELETE FROM practicas WHERE id = ?", [id], funcion);
    },
}