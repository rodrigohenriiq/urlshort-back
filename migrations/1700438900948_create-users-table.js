/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createExtension('uuid-ossp', { ifNotExists: true });
    pgm.createTable('users', {
      id: { type: 'uuid', primaryKey: true, default: pgm.func('uuid_generate_v4()') },
      email: { type: 'varchar(1000)', notNull: true, unique: true },
      password: { type: 'varchar(1000)', notNull: true },
      status: { type: 'varchar(50)', notNull: true, default: 'active' },
      role: { type: 'varchar(50)', notNull: true, default: 'user' },
      failed_login_attempts: { type: 'integer', default: 0 },
      last_login_at: { type: 'timestamp', default: null },
      created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
      updated_at: { type: 'timestamp', default: pgm.func('current_timestamp') }
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('users');
  };