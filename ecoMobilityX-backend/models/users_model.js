

// Función para crear un nuevo usuario en Firestore
async function createUser(user) {
    /** Se almacena le usuario en el autenticador de FireBase*/
    console.log(user)
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
//    const res = await db.collection('users').doc(user.email).set(data);
  return true; // Devuelve el ID único del usuario recién creado
}

async function removeUser(aux){
  const email = aux.email;
}

async function updateUser(data){
  return true
 }


const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    last_name:{
      type: String,
      required: true
    },
    email: {
        type: String
    },
    emailVerified: {
      type: Boolean
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber: {
      type: Number
    },
    photoURL: {
      type: String
    },
}, {
    timestamps: true
})


const User = mongoose.model("Usuario", UserSchema)

module.exports = {
  createUser,
  removeUser,
  updateUser,
  User
};

