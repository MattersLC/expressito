var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centro_de_computo',
    port: "3307"
});

con.connect(
    (err)=> {
        if(!err) {
            console.log('Conexión establecida');
            let date = new Date();
            let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
            console.log(output);
        } else {
            console.log('Error de conexión');
        }
    }
);

module.exports = con;