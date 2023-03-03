
module.exports={
    getUsers: function (conexion,funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },
    
    obtener: function (conexion,funcion) {
        conexion.query("SELECT * FROM practicas", funcion);
    },

    getPracticas: async function (conexion,funcion) {
        conexion.query("SELECT * FROM practicas", funcion);
    },
    
    getPractica: function (conexion, [fecha, horario], funcion) {
        conexion.query("SELECT * FROM practicas WHERE fecha = ? AND horario = ?", [fecha, horario], funcion);
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

    storePractice:function (conexion, [data], funcion) {
        conexion.query('INSERT INTO practicas SET ?', [data], funcion);
    },

    updatePractice:function (conexion, fecha, dia, horario, grupo, materia, docente, alumnos, carrera, software, id, funcion) {
        conexion.query('UPDATE practicas SET fecha = ?, dia = ?, horario = ?, grupo = ?, materia = ?, docente = ?, alumnos = ?, carrera = ?, software = ? WHERE id = ?', 
        [fecha, dia, horario, grupo, materia, docente, alumnos, carrera, software, id], funcion);
    },

    updateId:function(conexion, id, fecha, horario, funcion) {
        conexion.query('UPDATE practicas SET id = ? WHERE fecha = ? AND horario = ?', [id, fecha, horario], funcion);
    }
}