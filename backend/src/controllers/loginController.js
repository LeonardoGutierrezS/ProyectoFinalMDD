const User = require('../models/user.js');

exports.login = async (req, res) => {
    const { rut, password } = req.body;

    try {
      
      const usuarioEncontrado = await User.findOne({rut})
      const contraseña = await User.findOne({password})
       if(usuarioEncontrado == null && contraseña == null) return res.status(400).json({ message: 'Rut y contraseña no validas' });
       if(!usuarioEncontrado) return res.status(400).json({ message: 'Rut no valido' });
       if(!contraseña) return res.status(400).json({message: "Contraseña incorrecta"})
    
       res.status(200).json({
          id: usuarioEncontrado.id,
          rut: usuarioEncontrado.rut,
       })
       console.log("id: ",usuarioEncontrado.id, "rut: ",usuarioEncontrado.rut)
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

exports.register = async (req, res) => {
  const {username, password, rut} = req.body;

  try {
    
    const newUser = new User({
      username,
      password,
      rut,
    });

    const userSaved = await newUser.save();
    res.status(200).json({
      id: userSaved.id,
      username: userSaved.username,
      rut: userSaved.rut,
    })

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}