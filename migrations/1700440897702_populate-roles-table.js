/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.sql(`
      INSERT INTO roles (id, name, description)
      SELECT gen_random_uuid(), 'admin', 'Administrator role'
      WHERE NOT EXISTS (SELECT 1 FROM roles WHERE name = 'admin');
  
      INSERT INTO roles (id, name, description)
      SELECT gen_random_uuid(), 'user', 'Regular user role'
      WHERE NOT EXISTS (SELECT 1 FROM roles WHERE name = 'user');
    `);
  };
  
  exports.down = (pgm) => {
    pgm.sql(`
      DELETE FROM roles WHERE name IN ('admin', 'user');
    `);
  };
  