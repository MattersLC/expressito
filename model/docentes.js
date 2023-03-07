module.exports={
    getProffesors: async function(conexion, funcion) {
        const docentes = await conexion.collection('docentes').get();
    },

    getProffesorById: async function(conexion, [id], funcion) {
        const docente = await conexion.collection('docentes').doc(id).get();
        if (doc.exists) {
          funcion(doc.data());
        } else {
          console.log("No se encontró al docente");
        }
    },
    
    getProffesorByEmail: async function(conexion, [email], callback) {
        const querySnapshot = await conexion.collection('docentes').where('email', '==', email).get();
        if (querySnapshot.empty) {
          // No se encontró ningún estudiante con ese email
          return null;
        }
        // Encontramos un estudiante con ese email
        const student = querySnapshot.docs[0].data();
        return student;
    },  
}