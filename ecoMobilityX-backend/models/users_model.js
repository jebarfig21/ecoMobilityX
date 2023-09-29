
const { db } = require('./firebase');
const { getAuth, createUserWithEmailAndPassword } = require('firebase-admin/auth');

// Función para crear un nuevo usuario en Firestore
async function createUser(user) {
    /** Se almacena le usuario en el autenticador de FireBase*/
    console.log(user)
    getAuth().createUser({
      email: user.email,
      password: user.password
      })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
    });
    /** Se almacena la información del usuario en FireStore en la tabla user*/  
    const data = {
      name: user.name,
      last_name : user.last_name,
      email: user.email,
      emailVerified: false,
      phoneNumber: user.phone,
      displayName: user.name,
      photoURL: 'http://www.examplefw.com/12345678/photo.png',
      disabled: false,  
    };
    
    // Add a new document in collection "cities" with ID 'LA'
    const res = await db.collection('users').doc(user.email).set(data);
  return res.id; // Devuelve el ID único del usuario recién creado
}

module.exports = {
  createUser
};