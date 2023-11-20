/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    // Adicionando a coluna 'role_id'
    pgm.addColumns('users', {
      role_id: {
        type: 'uuid',
        references: '"roles"',
        onDelete: 'SET NULL'
      }
    });
  
    // Removendo a coluna 'role'
    pgm.dropColumn('users', 'role');
  };
  
  exports.down = (pgm) => {
    // Para reverter, adicione novamente a coluna 'role' e remova 'role_id'
    pgm.addColumn('users', {
      role: { type: 'varchar(255)' } // Ajuste conforme a definição original da coluna
    });
    pgm.dropColumn('users', 'role_id');
  };
  