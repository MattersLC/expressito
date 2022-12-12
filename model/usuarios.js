module.exports={
    getAllUsers: function (conexion,funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },

    getUser: function (conexion, [email], funcion) {
        conexion.query('SELECT * FROM usuarios WHERE email = ?', [email], funcion);
    },

    authUser:function (conexion, [email,password], funcion) {
        conexion.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], funcion);
    },

    authEmail:function (conexion, [email], funcion) {
        conexion.query("SELECT * FROM usuarios WHERE email = ?", [email], funcion);
    },

    createUser:function (conexion, [data], funcion) {
        conexion.query('INSERT INTO usuarios SET ?', [data], funcion);
    }
}

