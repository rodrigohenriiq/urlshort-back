const bcrypt = require('bcrypt');
const pool = require('../db/pool'); // Caminho para seu arquivo de configuração do pool do PostgreSQL

const createUser = async (email, password, role_id, status = 'active') => {
  // Hashing da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO users (email, password, role_id, status) VALUES ($1, $2, $3, $4) RETURNING id, email, role_id, status',
      [email, hashedPassword, role_id, status]
    );

    return result.rows[0]; // Retorna o novo usuário (sem a senha)
  } catch (error) {
    // Tratamento de erros
    throw error;
  }
};

const authenticateUser = async (email, password) => {
    console.log("Email recebido: " + email);
    const userQueryResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = userQueryResult.rows[0];
    
    if (user) {
        console.log("Senha recebida: ", password);
        console.log("Senha hash armazenada: ", user.password);

        if (await bcrypt.compare(password, user.password)){
            return user; // Retorna o usuário se a senha estiver correta
        }
    }
  
    return null; // Retorna null se a autenticação falhar
  };
  

module.exports = {
  createUser,
    authenticateUser,
};
