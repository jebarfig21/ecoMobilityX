var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const UserModel = require('../models/users_model');

// Controlador para crear un nuevo usuario
async function createUserController(req, res) {
    try {
        const { name, last_name, password, email,phone } = req.body; // Obtén los datos del cuerpo de la solicitud    
        console.log(req.body)
    
      // GENERAMOS FRAGMENTO ALEATORIO PARA USARSE CON EL PASSWORD
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      // CREAMOS UN USUARIO CON SU PASSWORD ENCRIPTADO
      var user = {
        name : name,
        last_name:last_name,
        password: hashedPassword,
        email : email,
        phone : phone,
      }
      const respuestaDB = await UserModel.User.create(user)
      
      // USUARIO CREADO. VAMOS A CREAR EL JSON WEB TOKEN

      // 1. EL "PAYLOAD" SERÁ UN OBJETO QUE CONTENDRÁ EL ID DEL USUARIO ENCONTRADO EN BASE DE DATOS.
      // POR NINGÚN MOTIVO AGREGUES INFORMACIÓN CONFIDENCIAL DEL USUARIO (SU PASSWORD) EN EL PAYLOAD.
      const payload = {
          user: {
              id: respuestaDB._id 
          }
      }

      // 2. FIRMAR EL JWT
      jwt.sign(
          payload, // DATOS QUE SE ACOMPAÑARÁN EN EL TOKEN
          process.env.SECRET, // LLAVE PARA DESCIFRAR LA FIRMA ELECTRÓNICA DEL TOKEN,
          {
              expiresIn: 360000 // EXPIRACIÓN DEL TOKEN
          },
          (error, token) => { // CALLBACK QUE, EN CASO DE QUE EXISTA UN ERROR, DEVUELVA EL TOKEN

              if(error) throw error

              res.json({
                  token
              })
          }
      )

  } catch (error) {
    console.log(error)
      return res.status(400).json({
          msg: error
      })
  }
}

async function loginUserController(req,res){

    // OBTENEMOS EL EMAIL Y EL PASSWORD DE LA PETICIÓN
    const {email, password} = req.body

    try {
        // ENCONTRAMOS UN USUARIO
        let foundUser = await UserModel.User.findOne({email})

        // SI NO HUBO UN USUARIO ENCONTRADO, DEVOLVEMOS UN ERROR
        if(!foundUser){
            return res.status(400).json({msg: "El usuario no existe"})
        }

        // SI TODO OK, HACEMOS LA EVALUACIÓN DE LA CONTRASEÑA ENVIADA CONTRA LA BASE DE DATOS
        const passCorrecto = await bcrypt.compare(password, foundUser.password)
        
        // SI EL PASSWORD ES INCORRECTO, REGRESAMOS UN MENSAJE SOBRE ESTO
        if(!passCorrecto){
            return await res.status(400).json({msg: "Password incorrecto"})
        }

        // SI TODO CORRECTO, GENERAMOS UN JSON WEB TOKEN
        // 1. DATOS DE ACOMPAÑAMIENTO AL JWT
        const payload = {
            user: {
                id: foundUser.id
            }
        }

        // 2. FIRMA DEL JWT
        jwt.sign(
            payload, 
            process.env.SECRET, 
            {
                expiresIn: 3600000
            }, 
            (error, token) => {
                if(error) throw error;
                
                //SI TODO SUCEDIÓ CORRECTAMENTE, RETORNAR EL TOKEN
                res.json({token})
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Hubo un error",
            error
        })
    }
}
async function verifyUserController(req,res){
    try {
        // CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
        
        const usuario = await UserModel.User.findById(req.user.id).select('-password')
        console.log(req.user)
        
        res.json({usuario})

    } catch (error) {
        // EN CASO DE HERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
        res.status(500).json({
            msg: "Hubo un error",
            error
        })
    }
    }
async function deleteUserController(req,res){
    try {
        // CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
        console.log(req.user)
        const usuario = await UserModel.User.findByIdAndRemove(req.user.id).select('-password')
        res.json({usuario})

    } catch (error) {
        // EN CASO DE HERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
        res.status(500).json({
            msg: "Hubo un error",
            error
        })
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
  updateUserController,
  loginUserController,
  verifyUserController
};
