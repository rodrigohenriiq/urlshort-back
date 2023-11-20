const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Obtém o token do header da requisição
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) return res.sendStatus(401).send('Acesso negado');; // Se não houver token, retorna 401

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403).send('Token inválido'); // Se o token for inválido, retorna 403
    req.user = user;
    next(); // Se tudo estiver ok, passa para a próxima função (controller)
  });
};

module.exports = authenticateToken;
