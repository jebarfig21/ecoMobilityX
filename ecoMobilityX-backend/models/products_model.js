
const { db } = require('./firebase');
const { getAuth, deleteUser } = require('firebase-admin/auth');

// Función para crear un nuevo usuario en Firestore
async function getProduct(id) {
    //const res = await db.collection('').doc(user.email).set(data);
  return null; // Devuelve el ID único del usuario recién creado
}


async function getAllProduct(id) {
    const res = await db.collection('users').doc(user.email).set(data);
  return null; // Devuelve el ID único del usuario recién creado
}


module.exports = {
  getProduct,
  getAllProduct,
};