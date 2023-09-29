const UserModel = require('../models/users_model');

exports.createOneRequest = (req, res) => {
    res.status(201).json({message: "New resource created!"});
}

exports.readOneRequest = (req, res) => {
    res.status(302).json({message: "Resource found!"});
}

exports.updateOneRequest = (req, res) => {
    res.status(301).json({message: "Resource updated!"});
}

exports.deleteOneRequest = (req, res) => {
    res.status(202).json({message: "Resource deleted!"});
}

// Controlador para crear un nuevo usuario
async function createUserController(req, res) {
  try {
    const { name, last_name, password, email,phone } = req.body; // Obtén los datos del cuerpo de la solicitud
    var user = {
        name : name,
        last_name:last_name,
        password : password,
        email : email,
        phone : phone,
    }
    console.log(req.body)
    const userId = await UserModel.createUser(user);

    // Puedes realizar acciones adicionales si es necesario
    res.status(201).json({ message: 'Usuario creado con éxito', userId });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

async function deleteUserController(req,res){
    try {
        const { email } = req.body; // Obtén los datos del cuerpo de la solicitud
        
        const userId = await UserModel.removeUser(email);
    
        // Puedes realizar acciones adicionales si es necesario
        res.status(201).json({ message: 'Usuario creado con éxito', userId });
      } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
      }
}

async function updateUserController(req,res){
    try {
        const { user } = req.body; // Obtén los datos del cuerpo de la solicitud
        
        const userId = await UserModel.updateUser(user);
    
        // Puedes realizar acciones adicionales si es necesario
        res.status(201).json({ message: 'Usuario creado con éxito', userId });
      } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
      }
}


module.exports = {
  createUserController,
  deleteUserController,
  updateUserController
};
