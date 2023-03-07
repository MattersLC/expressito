module.exports={
  getStudents: async function(conexion, funcion) {
    const students = await conexion.collection('estudiantes').get();
  },

  getStudentById: async function(conexion, [id], funcion) {
    const doc = await conexion.collection('estudiantes').doc(id).get();
    if (doc.exists) {
      funcion(doc.data());
    } else {
      console.log("No se encontró el estudiante");
    }
  },

  getStudentByEmail: async function(conexion, [email], callback) {
    const querySnapshot = await conexion.collection('estudiantes').where('email', '==', email).get();
    if (querySnapshot.empty) {
      // No se encontró ningún estudiante con ese email
      return null;
    }
    // Encontramos un estudiante con ese email
    const student = querySnapshot.docs[0].data();
    return student;
  },  

  createStudent: async function(conexion, [data], funcion) {
    try {
      const docRef = await conexion.collection('estudiantes').add(data);
      console.log('Estudiante creado con el ID:', docRef.id);
      funcion('Estudiante creado con éxito');
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
      funcion('Error al crear el estudiante');
    }
  }
}