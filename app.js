const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./authenticateToken');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota de registro
app.post('/register', async (req, res) => {
  try {
    // Aqui você deve adicionar a lógica para registrar o usuário no banco de dados
    // Incluindo hashing da senha
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  try {
    // Aqui você deve adicionar a lógica para autenticar o usuário
    // Incluindo verificar a senha e gerar um token JWT
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

app.get('/alguma-rota-protegida', authenticateToken, (req, res) => {
  // Lógica da rota
});

app.use(express.json());
app.use('/users', userRoutes);

const session = require('express-session');

app.use(session({
  secret: 'seu_segredo_de_sessao',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));



module.exports = app;
