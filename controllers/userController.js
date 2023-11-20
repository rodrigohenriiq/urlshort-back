const userService = require('../services/userService'); // Importando o userService
const { generateToken } = require('../utils/authHelpers'); // Importando o generateToken

exports.createUser = async (req, res) => {
  try {
    const { email, password, role_id } = req.body;

    // Validar email e senha (pode ser mais complexo na prática)
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }

    // Criar o usuário através do userService
    const newUser = await userService.createUser(email, password, role_id);

    // Responder com sucesso
    res.status(201).json(newUser);
  } catch (error) {
    // Tratamento de erros
    if (error.code === 'P2002') { // Código de erro específico do Prisma para conflito de chave única
      return res.status(409).send('Email already in use');
    }
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.authenticateUser(email, password);
      if (user) {
        // Gerar token (JWT, por exemplo) e enviar na resposta
        const token = generateToken(user);
        res.json({ token });
      } else {
        res.status(401).send('Authentication failed');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
