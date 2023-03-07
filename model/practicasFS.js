module.exports={
    getPracticas: async function(conexion, funcion) {
        //const practicasRef = await conexion.collection('practicas');
        //const practicasData = await practicasRef.get();
        const practicasDB = await conexion.collection('practicas').get();
        //const practicas = practicasBD.docs.map((doc) => doc.data());
        //funcion(practicas);
        //const practicas = await conexion.collection('practicas').get();
        //funcion(practicas.data());
        console.log("model/practicasFS");
        //console.log(practicas);
        /*data = practicas.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });*/
        let data = practicasDB.docs.map((doc) => doc.data());
        funcion(data);
        //console.log(data);
        //console.log(data.id)
    }
}