# Usar a imagem oficial do Node.js como base
FROM node:16

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar os arquivos do projeto para o diretório de trabalho
COPY . .

# Expôr a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]
